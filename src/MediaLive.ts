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
          inputId: input.attrId,
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
            codecSettings: {
              h264Settings: {
                timecodeBurninSettings: {
                  position: 'TOP_CENTER',
                  prefix: timecodeBurninPrefix,
                },
              },
            },
          },
        ],
        availBlanking: {
          state: 'ENABLED',
        },
      },
    });
  }
}