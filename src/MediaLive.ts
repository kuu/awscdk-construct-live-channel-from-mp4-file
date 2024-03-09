import {
  Aws,
} from 'aws-cdk-lib';

import {
  CfnInput,
  CfnChannel,
} from 'aws-cdk-lib/aws-medialive';

import { Construct } from 'constructs';

export interface MediaLiveProps {
  readonly sourceUrl: string;
  readonly mediaPackageChannelId: string;
  readonly timecodeBurninPrefix?: string;
}

export class MediaLive extends Construct {
  public readonly channel: CfnChannel;

  constructor(scope: Construct, id: string, {
    sourceUrl,
    mediaPackageChannelId,
    timecodeBurninPrefix,
  }: MediaLiveProps) {

    super(scope, id);

    // Create MediaLive input
    const input = new CfnInput(this, 'MyCfnInput', {
      name: Aws.STACK_NAME + '_EML-Input',
      type: 'MP4_FILE',
      sources: [
        {
          url: sourceUrl,
        },
      ],
    });
    // Create MediaLive channel
    this.channel = new CfnChannel(this, 'MyCfnChannel', {
      name: Aws.STACK_NAME + '_EML-Channel',
      channelClass: 'SINGLE_PIPELINE',
      inputAttachments: [
        {
          inputId: input.ref,
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
          },
        ],
        videoDescriptions: [
          {
            name: 'MyVideoDescription',
            width: 1280,
            height: 720,
            codecSettings: {
              h264Settings: {
                framerateNumerator: 30000,
                framerateDenominator: 1001,
                framerateControl: 'QVBR',
                maxBitrate: 3000000,
                gopSize: 3,
                gopSizeUnits: 'SECONDS',
                scanType: 'PROGRESSIVE',
                timecodeBurninSettings: {
                  position: 'TOP_CENTER',
                  prefix: timecodeBurninPrefix,
                  fontSize: 'LARGE_48',
                },
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