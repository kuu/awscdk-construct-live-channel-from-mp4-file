import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { Duration, RemovalPolicy, aws_logs as logs } from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface HarvestJobLambdaProps {
  readonly channelId: string;
  readonly endpointId: string;
  readonly startTime: Date;
  readonly endTime?: Date;
  readonly destination?: HarvestJobDestinationProps;
  readonly publish?: boolean;
  readonly retain?: boolean;
}

export interface HarvestJobDestinationProps {
  readonly bucketName: string; // The name of the S3 bucket.
  readonly manifestKey: string; // The S3 bucket key of the manifest file.
}

export class HarvestJobLambda extends Construct {
  public readonly func: NodejsFunction;
  public readonly destination: HarvestJobDestinationProps;
  public readonly publishedUrl?: string;

  constructor(scope: Construct, id: string, props: HarvestJobLambdaProps) {
    super(scope, id);

    const {
      channelId,
      endpointId,
      startTime,
      endTime,
      destination,
      publish = false,
      retain = false,
    } = props;

    if (destination) {
      this.destination = destination;
    } else {
      // Create S3 bucket
      const bucketName = `${crypto.randomUUID()}`;
      const bucket = new s3.Bucket(this, bucketName, {
        bucketName,
        removalPolicy: retain ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
        autoDeleteObjects: retain ? false : true,
      });
      bucket.addToResourcePolicy(new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:*'],
        resources: [bucket.bucketArn, `${bucket.bucketArn}/*`],
        principals: [new iam.ServicePrincipal('mediapackage.amazonaws.com')],
      }));
      this.destination = {
        bucketName,
        manifestKey: 'index.m3u8',
      };
    }
    //Create an IAM Role for MediaPackage to access S3
    const bucket = s3.Bucket.fromBucketName(this, 'Bucket', this.destination.bucketName);
    const role = new iam.Role(this, `IamRole-${bucket.bucketName}`, {
      inlinePolicies: {
        policy: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              effect: iam.Effect.ALLOW,
              actions: ['s3:*'],
              resources: [bucket.bucketArn, `${bucket.bucketArn}/*`],
            }),
          ],
        }),
      },
      assumedBy: new iam.ServicePrincipal('mediapackage.amazonaws.com'),
    });
    const roleArn = role.roleArn;

    const TS_ENTRY = path.resolve(__dirname, 'code', 'index.ts');
    const JS_ENTRY = path.resolve(__dirname, 'code', 'index.js');

    this.func = new NodejsFunction(scope, 'HarvestJobFunction', {
      runtime: Runtime.NODEJS_18_X,
      entry: fs.existsSync(TS_ENTRY) ? TS_ENTRY : JS_ENTRY,
      // projectRoot: path.resolve(__dirname, '..'),
      // depsLockFilePath: path.resolve(__dirname, '..', 'yarn.lock'),
      handler: 'handler',
      timeout: Duration.seconds(30),
      environment: {
        NODE_ENV: process.env.NODE_ENV as string,
        REGION: process.env.CDK_DEFAULT_REGION as string,
        CHANNEL_ID: channelId,
        ORIGIN_ENDPOINT_ID: endpointId,
        START_TIME: startTime.toISOString(),
        END_TIME: endTime ? endTime.toISOString() : '',
        S3_BUCKET_NAME: this.destination.bucketName,
        MANIFEST_KEY: this.destination.manifestKey,
        S3_ROLE_ARN: roleArn,
      },
      logRetention: logs.RetentionDays.TWO_WEEKS,
    });
    // Add a statement to call MediaLive schedule API
    this.func.addToRolePolicy(
      iam.PolicyStatement.fromJson({
        Effect: 'Allow',
        Action: 'medialive:*',
        Resource: '*',
      }),
    );
    // Add a statement to call MediaPackage harvest job API
    this.func.addToRolePolicy(
      iam.PolicyStatement.fromJson({
        Effect: 'Allow',
        Action: 'mediapackage:*',
        Resource: '*',
      }),
    );
    // Add a statement to pass the IAM role to MediaPackage
    this.func.addToRolePolicy(
      iam.PolicyStatement.fromJson({
        Effect: 'Allow',
        Action: 'iam:PassRole',
        Resource: roleArn,
      }),
    );

    if (publish) {
      // Create an Origin Access Identity (OAI)
      const oai = new cloudfront.OriginAccessIdentity(this, 'OAI', {
        comment: 'OAI for CloudFront to access private S3 bucket',
      });

      // Grant the OAI access to the private S3 bucket
      bucket.addToResourcePolicy(
        new iam.PolicyStatement({
          actions: ['s3:*'],
          resources: [bucket.bucketArn, `${bucket.bucketArn}/*`],
          principals: [new iam.CanonicalUserPrincipal(oai.cloudFrontOriginAccessIdentityS3CanonicalUserId)],
        }),
      );

      // Create a CloudFront distribution
      const distribution = new cloudfront.Distribution(this, 'Distribution', {
        defaultBehavior: {
          origin: new cloudfront_origins.S3Origin(bucket, { originAccessIdentity: oai }),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.ALLOW_ALL,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          cachePolicy: cloudfront.CachePolicy.ELEMENTAL_MEDIA_PACKAGE,
        },
        enabled: true,
      });

      if (retain) {
        distribution.applyRemovalPolicy(RemovalPolicy.RETAIN);
      }

      this.publishedUrl = `https://${distribution.distributionDomainName}/${this.destination.manifestKey}`;
    }
  }
}