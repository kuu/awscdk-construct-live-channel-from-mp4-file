import * as crypto from 'crypto';
import { aws_iam as iam, Fn } from 'aws-cdk-lib';
import { CfnInput, CfnChannel } from 'aws-cdk-lib/aws-medialive';
import { Construct } from 'constructs';
import { getUdpOutputSettings, getEncodingSettings } from './MediaLiveUtil';

export interface MediaLiveProps {
  readonly sourceUrls: string[]; // The list of URL of the MP4 files used by MediaLive as the sources.
  readonly destinations: CfnChannel.OutputDestinationProperty[]; // The destinations for the channel.
  readonly outputGroupSettingsList: CfnChannel.OutputGroupSettingsProperty[]; // The output group settings for the channel.
  readonly outputSettingsList: CfnChannel.OutputSettingsProperty[]; // The output settings for the channel.
  readonly channelClass?: string; // The class of the channel. (STANDARD or SINGLE_PIPELINE)
  readonly gopLengthInSeconds?: number; // The length of the GOP in seconds.
  readonly timecodeBurninPrefix?: string; // The prefix for the timecode burn-in.
  readonly hasTimecodeInSource?: boolean; // Whether the source has timecode.
}

export class MediaLive extends Construct {
  public readonly inputs: CfnInput[]; // The reference to the MediaLive inputs.
  public readonly channel: CfnChannel; // The reference to the MediaLive channel.

  constructor(scope: Construct, id: string, props: MediaLiveProps) {

    super(scope, id);

    const {
      sourceUrls,
      destinations,
      outputGroupSettingsList,
      outputSettingsList,
      channelClass = 'SINGLE_PIPELINE',
      gopLengthInSeconds = 3,
      timecodeBurninPrefix,
      hasTimecodeInSource = false,
    } = props;

    // Create MediaLive inputs
    if (hasTimecodeInSource) {
      this.inputs = sourceUrls.map((sourceUrl, i) => {
        // Create a dummy channel for embedding timecode in the source
        const fileInput = new CfnInput(this, `FileInput-${i}`, {
          name: `${crypto.randomUUID()}`,
          type: 'MP4_FILE',
          sources: [{ url: sourceUrl }],
        });
        const rtpInput = new CfnInput(this, `CfnInput-${i}`, {
          name: `${crypto.randomUUID()}`,
          type: 'RTP_PUSH',
        });
        createChannel(this, `${i}`, [fileInput], {
          destinations: [
            {
              id: `destination${i}`,
              settings: [{ url: Fn.select(0, rtpInput.attrDestinations) }],
            },
          ],
          outputGroupSettingsList: [
            {
              udpGroupSettings: {
                inputLossAction: 'PAUSE_OUTPUT',
              },
            },

          ],
          outputSettingsList: [{
            udpOutputSettings: getUdpOutputSettings(i),
          }],
          channelClass: 'SINGLE_PIPELINE',
          gopLengthInSeconds,
          isAbr: false,
        });
        return rtpInput;
      });
    } else {
      this.inputs = sourceUrls.map((sourceUrl, i) => {
        return new CfnInput(this, `CfnInput-${i}`, {
          name: `${crypto.randomUUID()}`,
          type: 'MP4_FILE',
          sources: Array.from({ length: channelClass === 'STANDARD' ? 2 : 1 }, () => ({ url: sourceUrl })),
        });
      });
    }

    // Create MediaLive channel
    this.channel = createChannel(this, 'Channel', this.inputs, {
      destinations,
      outputGroupSettingsList,
      outputSettingsList,
      channelClass,
      gopLengthInSeconds,
      timecodeBurninPrefix,
      isAbr: true,
    });

  }
}

export interface MediaLiveInternalProps {
  readonly channelClass: string; // The class of the channel. (STANDARD or SINGLE_PIPELINE)
  readonly destinations: CfnChannel.OutputDestinationProperty[]; // The destinations for the channel.
  readonly outputGroupSettingsList: CfnChannel.OutputGroupSettingsProperty[]; // The output group settings for the channel.
  readonly outputSettingsList: CfnChannel.OutputSettingsProperty[]; // The output settings for the channel.
  readonly gopLengthInSeconds: number; // The length of the GOP in seconds.
  readonly timecodeBurninPrefix?: string; // The prefix for the timecode burn-in.
  readonly isAbr: boolean; // Whether the channel is ABR.
}

export function createChannel(scope: Construct, id: string, inputs: CfnInput[], props: MediaLiveInternalProps): CfnChannel {
  const {
    channelClass,
    destinations,
    outputGroupSettingsList,
    outputSettingsList,
    gopLengthInSeconds,
    timecodeBurninPrefix,
    isAbr,
  } = props;
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
          'mediapackagev2:PutObject',
        ],
      }),
    ],
  });
  //Create a Role for MediaLive to access MediaPackage and S3
  const role = new iam.Role(scope, `IamRole${id}`, {
    inlinePolicies: {
      policy: customPolicyMediaLive,
    },
    assumedBy: new iam.ServicePrincipal('medialive.amazonaws.com'),
  });
  // Create MediaLive channel
  return new CfnChannel(scope, `CfnChannel${id}`, {
    name: `${crypto.randomUUID()}`,
    channelClass,
    roleArn: role.roleArn,
    inputAttachments: inputs.map((input) => ({
      inputId: input.ref,
      inputAttachmentName: input.name,
      inputSettings: {
        sourceEndBehavior: 'LOOP',
      },
    })),
    destinations,
    encoderSettings: getEncodingSettings(
      outputGroupSettingsList,
      outputSettingsList,
      gopLengthInSeconds,
      isAbr,
      timecodeBurninPrefix,
    ),
  });
}
