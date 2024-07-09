import * as crypto from 'crypto';
import {
  aws_iam as iam,
} from 'aws-cdk-lib';

import {
  CfnInput,
  CfnChannel,
} from 'aws-cdk-lib/aws-medialive';

import { Construct } from 'constructs';

export interface MediaLiveProps {
  readonly sourceUrls: string[]; // The list of URL of the MP4 files used by MediaLive as the sources.
  readonly destinations: CfnChannel.OutputDestinationProperty[]; // The destinations for the channel.
  readonly outputGroupSettingsList: CfnChannel.OutputGroupSettingsProperty[]; // The output group settings for the channel.
  readonly outputSettingsList: CfnChannel.OutputSettingsProperty[]; // The output settings for the channel.
  readonly channelClass?: string; // The class of the channel. (STANDARD or SINGLE_PIPELINE)
  readonly gopLengthInSeconds?: number; // The length of the GOP in seconds.
  readonly timecodeBurninPrefix?: string; // The prefix for the timecode burn-in.
}

function getOutputGroup (
  name: string,
  outputGroupSettings: CfnChannel.OutputGroupSettingsProperty,
  outputSettings: CfnChannel.OutputSettingsProperty,
): CfnChannel.OutputGroupProperty {
  return {
    name,
    outputGroupSettings,
    outputs: [
      {
        outputName: `${name}_640x360`,
        outputSettings,
        videoDescriptionName: '_640x360',
      },
      {
        outputName: `${name}_960x540`,
        outputSettings,
        videoDescriptionName: '_960x540',
      },
      {
        outputName: `${name}_1280x720`,
        outputSettings,
        videoDescriptionName: '_1280x720',
      },
      {
        outputName: `${name}_96Kbps_AAC`,
        outputSettings,
        audioDescriptionNames: [
          '_96Kbps_AAC',
        ],
      },
    ],
  };
}

export class MediaLive extends Construct {
  public readonly inputs: CfnInput[]; // The reference to the MediaLive inputs.
  public readonly channel: CfnChannel; // The reference to the MediaLive channel.

  constructor(scope: Construct, id: string, {
    sourceUrls,
    destinations,
    outputGroupSettingsList,
    outputSettingsList,
    channelClass = 'SINGLE_PIPELINE',
    gopLengthInSeconds = 3,
    timecodeBurninPrefix,
  }: MediaLiveProps) {

    super(scope, id);

    // Create MediaLive MP4 inputs
    this.inputs = sourceUrls.map((sourceUrl, i) => {
      return new CfnInput(this, `CfnInput-${i}`, {
        name: `${crypto.randomUUID()}`,
        type: 'MP4_FILE',
        sources: Array.from({ length: channelClass === 'STANDARD' ? 2 : 1 }, () => ({ url: sourceUrl })),
      });
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
            'mediapackagev2:PutObject',
          ],
        }),
      ],
    });
    //Create a Role for MediaLive to access MediaPackage and S3
    const role = new iam.Role(this, 'IamRole', {
      inlinePolicies: {
        policy: customPolicyMediaLive,
      },
      assumedBy: new iam.ServicePrincipal('medialive.amazonaws.com'),
    });
    // Create output groups
    const outputGroups = [];
    for (const [i, outputGroupSettings] of outputGroupSettingsList.entries()) {
      outputGroups.push(getOutputGroup(`outputGroup_${i}`, outputGroupSettings, outputSettingsList[i]));
    }
    // Create MediaLive channel
    this.channel = new CfnChannel(this, 'CfnChannel', {
      name: `${crypto.randomUUID()}`,
      channelClass,
      roleArn: role.roleArn,
      inputAttachments: this.inputs.map((input) => ({
        inputId: input.ref,
        inputAttachmentName: input.name,
        inputSettings: {
          sourceEndBehavior: 'LOOP',
        },
      })),
      destinations,
      encoderSettings: {
        outputGroups,
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
        audioDescriptions: [
          {
            name: '_96Kbps_AAC',
            audioTypeControl: 'FOLLOW_INPUT',
            codecSettings: {
              aacSettings: {
                bitrate: 96000,
                codingMode: 'CODING_MODE_2_0',
                sampleRate: 48000,
              },
            },
            languageCodeControl: 'FOLLOW_INPUT',
            audioSelectorName: 'default',
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