import {
  Aws,
  aws_iam as iam,
} from 'aws-cdk-lib';

import {
  CfnInput,
  CfnChannel,
} from 'aws-cdk-lib/aws-medialive';

import { Construct } from 'constructs';

export interface MediaLiveProps {
  readonly sourceUrl: string; // The URL of the MP4 file used by MediaLive as the source.
  readonly mediaPackageChannelId: string; // The ID of the MediaPackage channel used as the destination.
  readonly gopLengthInSeconds?: number; // The length of the GOP in seconds.
  readonly timecodeBurninPrefix?: string; // The prefix for the timecode burn-in.
}

export class MediaLive extends Construct {
  public readonly input: CfnInput; // The reference to the MediaLive input.
  public readonly channel: CfnChannel; // The reference to the MediaLive channel.

  constructor(scope: Construct, id: string, {
    sourceUrl,
    mediaPackageChannelId,
    gopLengthInSeconds = 3,
    timecodeBurninPrefix,
  }: MediaLiveProps) {

    super(scope, id);

    // Create MediaLive MP4 input
    this.input = new CfnInput(this, 'MediaLive-CfnInput', {
      name: Aws.STACK_NAME + '_EML-Input',
      type: 'MP4_FILE',
      sources: [
        {
          url: sourceUrl,
        },
      ],
    });
    // Create IAM Policy for MediaLive to access MediaPackage and S3
    const customPolicyMediaLive = new iam.PolicyDocument({
      statements: [
        new iam.PolicyStatement({
          resources: [
            '*',
          ],
          actions: [
            's3:ListBucket',
            's3:GetObject',
            'mediapackage:DescribeChannel',
          ],
        }),
      ],
    });
    //Create a Role for MediaLive to access MediaPackage and S3
    const role = new iam.Role(this, 'MediaLiveAccessRole', {
      inlinePolicies: {
        policy: customPolicyMediaLive,
      },
      assumedBy: new iam.ServicePrincipal('medialive.amazonaws.com'),
    });
    // Create MediaLive channel
    this.channel = new CfnChannel(this, 'MediaLive-CfnChannel', {
      name: Aws.STACK_NAME + '_EML-Channel',
      channelClass: 'SINGLE_PIPELINE',
      roleArn: role.roleArn,
      inputAttachments: [
        {
          inputId: this.input.ref,
          inputSettings: {
            sourceEndBehavior: 'LOOP',
          },
        },
      ],
      destinations: [
        {
          id: 'MyMediaPackageDestination',
          mediaPackageSettings: [
            {
              channelId: mediaPackageChannelId,
            },
          ],
        },
      ],
      encoderSettings: {
        outputGroups: [
          {
            name: 'MyOutputGroup',
            outputGroupSettings: {
              mediaPackageGroupSettings: {
                destination: {
                  destinationRefId: 'MyMediaPackageDestination',
                },
              },
            },
            outputs: [
              {
                outputName: '_640x360',
                outputSettings: {
                  mediaPackageOutputSettings: {},
                },
                videoDescriptionName: '_640x360',
              },
              {
                outputName: '_960x540',
                outputSettings: {
                  mediaPackageOutputSettings: {},
                },
                videoDescriptionName: '_960x540',
              },
              {
                outputName: '_1280x720',
                outputSettings: {
                  mediaPackageOutputSettings: {},
                },
                videoDescriptionName: '_1280x720',
              },
            ],
          },
        ],
        videoDescriptions: [
          {
            name: '_640x360',
            width: 640,
            height: 360,
            codecSettings: {
              h264Settings: {
                framerateControl: 'SPECIFIED',
                framerateNumerator: 30000,
                framerateDenominator: 1001,
                parControl: 'SPECIFIED',
                parNumerator: 1,
                parDenominator: 1,
                rateControlMode: 'QVBR',
                maxBitrate: 1000000,
                gopSize: gopLengthInSeconds,
                gopSizeUnits: 'SECONDS',
                scanType: 'PROGRESSIVE',
                timecodeBurninSettings: timecodeBurninPrefix ? {
                  position: 'TOP_CENTER',
                  prefix: `${timecodeBurninPrefix}_640x360`,
                  fontSize: 'SMALL_16',
                } : undefined,
              },
            },
          },
          {
            name: '_960x540',
            width: 960,
            height: 540,
            codecSettings: {
              h264Settings: {
                framerateControl: 'SPECIFIED',
                framerateNumerator: 30000,
                framerateDenominator: 1001,
                parControl: 'SPECIFIED',
                parNumerator: 1,
                parDenominator: 1,
                rateControlMode: 'QVBR',
                maxBitrate: 2000000,
                gopSize: gopLengthInSeconds,
                gopSizeUnits: 'SECONDS',
                scanType: 'PROGRESSIVE',
                timecodeBurninSettings: timecodeBurninPrefix ? {
                  position: 'TOP_CENTER',
                  prefix: `${timecodeBurninPrefix}_960x540`,
                  fontSize: 'MEDIUM_32',
                } : undefined,
              },
            },
          },
          {
            name: '_1280x720',
            width: 1280,
            height: 720,
            codecSettings: {
              h264Settings: {
                framerateControl: 'SPECIFIED',
                framerateNumerator: 30000,
                framerateDenominator: 1001,
                parControl: 'SPECIFIED',
                parNumerator: 1,
                parDenominator: 1,
                rateControlMode: 'QVBR',
                maxBitrate: 3000000,
                gopSize: gopLengthInSeconds,
                gopSizeUnits: 'SECONDS',
                scanType: 'PROGRESSIVE',
                timecodeBurninSettings: timecodeBurninPrefix ? {
                  position: 'TOP_CENTER',
                  prefix: `${timecodeBurninPrefix}_1280x720`,
                  fontSize: 'LARGE_48',
                } : undefined,
              },
            },
          },
        ],
        timecodeConfig: {
          source: 'SYSTEMCLOCK',
        },
        availBlanking: {
          state: 'ENABLED',
        },
      },
    });
  }
}