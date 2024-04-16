import * as crypto from 'crypto';
import { CfnChannel } from 'aws-cdk-lib/aws-medialive';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { MediaLive } from './MediaLive';
import { MediaPackageV1 } from './MediaPackageV1';
import { MediaPackageV2 } from './MediaPackageV2';

export enum MediaPackageVersionSpecType {
  V1_ONLY = 'V1_ONLY',
  V2_ONLY = 'V2_ONLY',
  V1_AND_V2 = 'V1_AND_V2',
}

export interface MediaPackageV2Settings {
  readonly channelGroupName?: string; // The name of the channel group to be used.
  readonly omitLlHls?: boolean; // Whether to skip the creation of a Low Latency HLS endpoint.
}

export interface LiveChannelFromMp4Props {
  readonly sourceUrl: string; // The URL of the MP4 file used by MediaLive as the source.
  readonly channelClass?: string; // The class of the channel. (STANDARD or SINGLE_PIPELINE)
  readonly gopLengthInSeconds?: number; // The length of the GOP in seconds.
  readonly timecodeBurninPrefix?: string; // The prefix for the timecode burn-in.
  readonly segmentDurationSeconds?: number; // The duration of each segment in seconds.
  readonly manifestWindowSeconds?: number; // The duration of manifest in seconds.
  readonly hlsAdMarkers?: string; // Controls how ad markers are included in the packaged endpoint.
  readonly autoStart?: boolean; // Whether to start the channel automatically.
  readonly startoverWindowSeconds?: number; // The duration of startover window in seconds.
  readonly separateAudioRendition?: boolean; // Whether to separate HLS audio rendition.
  readonly mediaPackageVersionSpec?: MediaPackageVersionSpecType; // Whether to use MediaPackageV2.
  readonly mediaPackageV2Settings?: MediaPackageV2Settings; // The settings for MediaPackageV2.
}

export class LiveChannelFromMp4 extends Construct {
  public readonly eml: MediaLive; // The reference to the MediaLive input/channel.
  public readonly empv1: MediaPackageV1 | undefined; // The reference to the MediaPackageV1 channel/endpoints.
  public readonly empv2: MediaPackageV2 | undefined; // The reference to the MediaPackageV2 channelGroup/channel/endpoints.

  constructor(scope: Construct, id: string, {
    sourceUrl,
    channelClass,
    gopLengthInSeconds,
    timecodeBurninPrefix,
    segmentDurationSeconds,
    manifestWindowSeconds,
    hlsAdMarkers,
    autoStart,
    startoverWindowSeconds,
    separateAudioRendition,
    mediaPackageVersionSpec = MediaPackageVersionSpecType.V1_AND_V2,
    mediaPackageV2Settings,
  }: LiveChannelFromMp4Props) {

    super(scope, id);

    if (mediaPackageVersionSpec != MediaPackageVersionSpecType.V2_ONLY) {
      this.empv1 = new MediaPackageV1(this, 'MediaPackageV1', {
        segmentDurationSeconds,
        manifestWindowSeconds,
        hlsAdMarkers,
        startoverWindowSeconds,
        separateAudioRendition,
      });
    }

    if (mediaPackageVersionSpec != MediaPackageVersionSpecType.V1_ONLY) {
      this.empv2 = new MediaPackageV2(this, 'MediaPackageV2', {
        segmentDurationSeconds,
        manifestWindowSeconds,
        hlsAdMarkers,
        startoverWindowSeconds,
        separateAudioRendition,
        channelGroupName: mediaPackageV2Settings?.channelGroupName,
        omitLlHls: mediaPackageV2Settings?.omitLlHls,
      });
    }

    const hlsGroupSettings = {
      adMarkers: ['ELEMENTAL_SCTE35'],
      destination: {
        destinationRefId: 'MediaPackageV2',
      },
      hlsCdnSettings: {
        hlsWebdavSettings: {
          httpTransferMode: 'NON_CHUNKED',
        },
      },
      indexNSegments: 15,
      inputLossAction: 'PAUSE_OUTPUT',
      manifestDurationFormat: 'FLOATING_POINT',
      programDateTime: 'INCLUDE',
      programDateTimeClock: 'SYSTEM_CLOCK',
      programDateTimePeriod: 1,
      segmentLength: 1,
      streamInfResolution: 'INCLUDE',
    };
    const hlsOutputSettings = {
      hlsSettings: {
        standardHlsSettings: {
          m3U8Settings: {
            scte35Behavior: 'PASSTHROUGH',
            timedMetadataBehavior: 'PASSTHROUGH',
          },
        },
      },
    };
    let destinations: CfnChannel.OutputDestinationProperty[];
    let outputGroupSettingsList: CfnChannel.OutputGroupSettingsProperty[];
    let outputSettingsList: CfnChannel.OutputSettingsProperty[];
    const ingestEndpoints = channelClass === 'STANDARD' ? this.empv2?.ingestEndpoints : this.empv2?.ingestEndpoints.slice(0, 1);
    switch (mediaPackageVersionSpec) {
      case MediaPackageVersionSpecType.V1_ONLY:
        destinations = [{
          id: 'MediaPackageV1',
          mediaPackageSettings: [{
            channelId: this.empv1?.channel.ref,
          }],
        }];
        outputGroupSettingsList = [{
          mediaPackageGroupSettings: {
            destination: {
              destinationRefId: 'MediaPackageV1',
            },
          },
        }];
        outputSettingsList = [{
          mediaPackageOutputSettings: {},
        }];
        break;
      case MediaPackageVersionSpecType.V2_ONLY:
        destinations = [{
          id: 'MediaPackageV2',
          settings: ingestEndpoints,
        }];
        outputGroupSettingsList = [{
          hlsGroupSettings,
        }];
        outputSettingsList = [{
          hlsOutputSettings,
        }];
        break;
      case MediaPackageVersionSpecType.V1_AND_V2:
        destinations = [
          {
            id: 'MediaPackageV1',
            mediaPackageSettings: [{
              channelId: this.empv1?.channel.ref,
            }],
          },
          {
            id: 'MediaPackageV2',
            settings: ingestEndpoints,
          },
        ];
        outputGroupSettingsList = [
          {
            mediaPackageGroupSettings: {
              destination: {
                destinationRefId: 'MediaPackageV1',
              },
            },
          },
          {
            hlsGroupSettings,
          },
        ];
        outputSettingsList = [
          {
            mediaPackageOutputSettings: {},
          },
          {
            hlsOutputSettings,
          },
        ];
        break;
    }

    this.eml = new MediaLive(this, 'MediaLive', {
      sourceUrl,
      destinations,
      outputGroupSettingsList,
      outputSettingsList,
      channelClass,
      gopLengthInSeconds:
        mediaPackageVersionSpec === MediaPackageVersionSpecType.V1_ONLY || mediaPackageV2Settings?.omitLlHls
          ? gopLengthInSeconds : 1,
      timecodeBurninPrefix,
    });

    if (autoStart) {
      // Start channel
      new AwsCustomResource(this, 'StartMediaLiveChannel', {
        onCreate: {
          service: 'MediaLive',
          action: 'StartChannel',
          parameters: {
            ChannelId: this.eml.channel.ref,
          },
          physicalResourceId: PhysicalResourceId.of(`${crypto.randomUUID()}`),
          ignoreErrorCodesMatching: '*',
          outputPaths: ['Id', 'Arn'],
        },
        onDelete: {
          service: 'MediaLive',
          action: 'StopChannel',
          parameters: {
            ChannelId: this.eml.channel.ref,
          },
          physicalResourceId: PhysicalResourceId.of(`${crypto.randomUUID()}`),
          ignoreErrorCodesMatching: '*',
          outputPaths: ['Id', 'Arn'],
        },
        //Will ignore any resource and use the assumedRoleArn as resource and 'sts:AssumeRole' for service:action
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });
    }
  }
}
