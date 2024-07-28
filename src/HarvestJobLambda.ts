import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { Duration, RemovalPolicy, aws_logs as logs } from 'aws-cdk-lib';
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
}

export interface HarvestJobDestinationProps {
  readonly bucketName: string; // The name of the S3 bucket.
  readonly roleArn: string; // The ARN of the IAM role for MediaPackage to access the S3 bucket.
  readonly manifestKey: string; // The S3 bucket key of the manifest file.
}

export class HarvestJobLambda extends Construct {
  public readonly func: NodejsFunction;
  public readonly s3Url: string;

  constructor(scope: Construct, id: string, props: HarvestJobLambdaProps) {
    super(scope, id);

    const {
      channelId,
      endpointId,
      startTime,
      endTime,
      destination,
    } = props;

    const s3BucketName = destination?.bucketName ?? `${crypto.randomUUID()}`;
    let roleArn = destination?.roleArn;
    const manifestKey = destination?.manifestKey ?? 'index.m3u8';

    if (!destination) {
      // Create S3 bucket
      const bucket = new s3.Bucket(this, s3BucketName, {
        bucketName: s3BucketName,
        removalPolicy: RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
      });
      bucket.addToResourcePolicy(new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:*'],
        resources: [bucket.bucketArn, `${bucket.bucketArn}/*`],
        principals: [new iam.ServicePrincipal('mediapackage.amazonaws.com')],
      }));
      //Create an IAM Role for MediaPackage to access S3
      const role = new iam.Role(this, `IamRole-${s3BucketName}`, {
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
      roleArn = role.roleArn;
    }

    this.s3Url = `s3://${s3BucketName}/${manifestKey}`;

    const TS_ENTRY = path.resolve(__dirname, 'code', 'index.ts');
    const JS_ENTRY = path.resolve(__dirname, 'code', 'index.js');

    this.func = new NodejsFunction(scope, 'ScheduleSCTE', {
      runtime: Runtime.NODEJS_18_X,
      entry: fs.existsSync(TS_ENTRY) ? TS_ENTRY : JS_ENTRY,
      // projectRoot: path.resolve(__dirname, '..'),
      depsLockFilePath: path.resolve(__dirname, '..', 'yarn.lock'),
      handler: 'handler',
      timeout: Duration.seconds(30),
      environment: {
        NODE_ENV: process.env.NODE_ENV as string,
        REGION: process.env.CDK_DEFAULT_REGION as string,
        CHANNEL_ID: channelId,
        ORIGIN_ENDPOINT_ID: endpointId,
        START_TIME: startTime.toISOString(),
        END_TIME: endTime ? endTime.toISOString() : '',
        S3_BUCKET_NAME: s3BucketName,
        MANIFEST_KEY: manifestKey,
        S3_ROLE_ARN: roleArn as string,
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
  }
}