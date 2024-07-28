import { CfnChannel } from 'aws-cdk-lib/aws-medialive';
import { CfnOriginEndpoint } from 'aws-cdk-lib/aws-mediapackage';
import { Construct } from 'constructs';
import { HarvestJobLambda, HarvestJobDestinationProps } from './HarvestJobLambda';
import { MediaLive, SourceSpec, EncoderSettings, startChannel } from './MediaLive';
import { MediaPackageV1, MediaPakcageV1Props } from './MediaPackageV1';
import { MediaPackageV2, MediaPakcageV2Props } from './MediaPackageV2';

export interface EncoderSpec {
  readonly gopLengthInSeconds?: number; // The length of the GOP in seconds.
  readonly timecodeBurninPrefix?: string; // The prefix for the timecode burn-in.
}

function isEncoderSpec(spec: EncoderSpec | CfnChannel.EncoderSettingsProperty): spec is EncoderSpec {
  return (spec as EncoderSpec).gopLengthInSeconds !== undefined
  || (spec as EncoderSpec).timecodeBurninPrefix !== undefined;
}

export interface MediaPackageV2Settings {
  readonly channelGroupName?: string; // The name of the channel group to be used.
  readonly omitLlHls?: boolean; // Whether to skip the creation of a Low Latency HLS endpoint.
}

export interface PackagerSpec {
  readonly segmentDurationSeconds?: number; // The duration of each segment in seconds.
  readonly manifestWindowSeconds?: number; // The duration of manifest in seconds.
  readonly hlsAdMarkers?: string; // Controls how ad markers are included in the packaged endpoint.
  readonly startoverWindowSeconds?: number; // The duration of startover window in seconds.
  readonly separateAudioRendition?: boolean; // Whether to separate HLS audio rendition.
  readonly mediaPackageV2Settings?: MediaPackageV2Settings; // The settings for MediaPackageV2.
}

type PackagerFullSpec = MediaPakcageV1Props | MediaPakcageV2Props | (MediaPakcageV1Props | MediaPakcageV2Props)[];

function isPackagerSpec(spec: PackagerSpec | PackagerFullSpec): spec is PackagerSpec {
  return (spec as PackagerSpec).segmentDurationSeconds !== undefined
  || (spec as PackagerSpec).manifestWindowSeconds !== undefined
  || (spec as PackagerSpec).hlsAdMarkers !== undefined
  || (spec as PackagerSpec).startoverWindowSeconds !== undefined
  || (spec as PackagerSpec).separateAudioRendition !== undefined
  || (spec as PackagerSpec).mediaPackageV2Settings !== undefined;
}

export interface LiveChannelFromMp4Props {
  readonly source: string | string[] | SourceSpec[]; // The url(s) of the MP4 file(s) used by MediaLive as the source.
  readonly channelClass?: 'STANDARD' | 'SINGLE_PIPELINE'; // The class of the channel.
  readonly encoderSpec?: EncoderSpec | CfnChannel.EncoderSettingsProperty; // Encoding settings for the channel.
  readonly mediaPackageVersionSpec?: 'V1_ONLY' | 'V2_ONLY' | 'V1_AND_V2'; // Whether to use MediaPackageV2.
  readonly packagerSpec?: PackagerSpec | PackagerFullSpec; // Packaging settings for the channel.
  readonly autoStart?: boolean; // Whether to start the channel automatically.
}

export class LiveChannelFromMp4 extends Construct {
  public readonly eml: MediaLive; // The reference to the MediaLive input/channel.
  public readonly empv1?: MediaPackageV1; // The reference to the MediaPackageV1 channel/endpoints.
  public readonly empv2?: MediaPackageV2; // The reference to the MediaPackageV2 channelGroup/channel/endpoints.
  public readonly channelStartTime?: Date; // The start time of the channel.

  constructor(scope: Construct, id: string, {
    source,
    channelClass = 'SINGLE_PIPELINE',
    encoderSpec = {
      gopLengthInSeconds: 3,
    },
    mediaPackageVersionSpec = 'V1_AND_V2',
    packagerSpec = {
      segmentDurationSeconds: 6,
      manifestWindowSeconds: 60,
      hlsAdMarkers: 'DATERANGE',
      startoverWindowSeconds: 60,
      separateAudioRendition: false,
    },
    autoStart = true,
  }: LiveChannelFromMp4Props) {

    super(scope, id);

    if (isPackagerSpec(packagerSpec)) {

      const {
        segmentDurationSeconds = 6,
        manifestWindowSeconds = 60,
        hlsAdMarkers = 'DATERANGE',
        startoverWindowSeconds = 60,
        separateAudioRendition = false,
        mediaPackageV2Settings,
      } = packagerSpec;

      if (mediaPackageVersionSpec != 'V2_ONLY') {
        this.empv1 = new MediaPackageV1(this, 'MediaPackageV1', {
          startoverWindowSeconds,
          endpointSpec: {
            segmentDurationSeconds,
            manifestWindowSeconds,
            hlsAdMarkers,
            separateAudioRendition,
          },
        });
      }

      if (mediaPackageVersionSpec != 'V1_ONLY') {
        this.empv2 = new MediaPackageV2(this, 'MediaPackageV2', {
          channelGroupName: mediaPackageV2Settings?.channelGroupName,
          startoverWindowSeconds,
          endpointSpec: {
            segmentDurationSeconds,
            manifestWindowSeconds,
            hlsAdMarkers,
            separateAudioRendition,
            omitLlHls: mediaPackageV2Settings?.omitLlHls,
          },
        });
      }
    } else {
      // packagerSpec is PackagerFullSpec
      if (mediaPackageVersionSpec === 'V1_ONLY') {
        this.empv1 = new MediaPackageV1(this, 'MediaPackageV1', packagerSpec as MediaPakcageV1Props);
      } else if (mediaPackageVersionSpec === 'V2_ONLY') {
        this.empv2 = new MediaPackageV2(this, 'MediaPackageV2', packagerSpec as MediaPakcageV2Props);
      } else {
        const [v1Spec, v2Spec] = packagerSpec as (MediaPakcageV1Props | MediaPakcageV2Props)[];
        this.empv1 = new MediaPackageV1(this, 'MediaPackageV1', v1Spec as MediaPakcageV1Props);
        this.empv2 = new MediaPackageV2(this, 'MediaPackageV2', v2Spec as MediaPakcageV2Props);
      }
    }

    const sources = createSourceSpecs(source);
    let destinations: CfnChannel.OutputDestinationProperty[];
    const ingestEndpoints = channelClass === 'STANDARD' ? this.empv2?.ingestEndpoints : this.empv2?.ingestEndpoints.slice(0, 1);
    switch (mediaPackageVersionSpec) {
      case 'V1_ONLY':
        destinations = [{
          id: 'MediaPackageV1',
          mediaPackageSettings: [{
            channelId: this.empv1?.channel.ref,
          }],
        }];
        break;
      case 'V2_ONLY':
        destinations = [{
          id: 'MediaPackageV2',
          settings: ingestEndpoints,
        }];
        break;
      case 'V1_AND_V2':
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
        break;
    }

    let internalEncoderSpec: EncoderSettings;

    if (isEncoderSpec(encoderSpec)) {

      const {
        gopLengthInSeconds = 3,
        timecodeBurninPrefix,
      } = encoderSpec;

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
      let outputGroupSettingsList: CfnChannel.OutputGroupSettingsProperty[];
      let outputSettingsList: CfnChannel.OutputSettingsProperty[];
      switch (mediaPackageVersionSpec) {
        case 'V1_ONLY':
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
        case 'V2_ONLY':
          outputGroupSettingsList = [{
            hlsGroupSettings,
          }];
          outputSettingsList = [{
            hlsOutputSettings,
          }];
          break;
        case 'V1_AND_V2':
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

      internalEncoderSpec = {
        outputGroupSettingsList,
        outputSettingsList,
        gopLengthInSeconds: this.empv2?.endpoints.llHls ? 1 : gopLengthInSeconds,
        timecodeBurninPrefix,
      };

    } else {
      // encoderSpec is CfnChannel.EncoderSettingsProperty
      internalEncoderSpec = encoderSpec;
    }

    this.eml = new MediaLive(this, 'MediaLive', {
      sources,
      destinations,
      channelClass,
      encoderSpec: internalEncoderSpec,
    });

    if (autoStart) {
      // Start channel
      this.channelStartTime = startChannel(this, 'StartMediaLiveChannel', this.eml.channel.ref);
    }
  }

  // Create a Lambda function that stops the channel and schedule a harvest job from the live endpoint.
  public createHarvestJob(props: HarvestJobProps): HarvestJobLambda {
    // Create a Lambda function to schedule a harvest job
    return new HarvestJobLambda(this, 'HarvestJob', {
      channelId: this.eml.channel.ref,
      endpointId: props.endpoint.id,
      startTime: props.startTime ?? this.getStartTime(),
      endTime: props.endTime,
      destination: props.destination,
      publish: props.publish,
      retain: props.retain,
    });
  }

  private getStartTime(): Date {
    const epocTime = this.channelStartTime ? this.channelStartTime.getTime() : new Date().getTime();
    return new Date(epocTime + 30 * 1000);
  }
}

export interface HarvestJobProps {
  readonly endpoint: CfnOriginEndpoint; // The live endpoint to be harvested.
  readonly destination?: HarvestJobDestinationProps; // The destination of the harvest job. If not specified, a new S3 bucket will be created.
  readonly startTime?: Date; // The start time of the harvest job. Default is 30 seconds after the channel start time.
  readonly endTime?: Date; // The end time of the harvest job. Default is the function invocation time.
  readonly publish?: boolean; // Whether to publish the harvested VOD content.
  readonly retain?: boolean; // Whether to retain the harvested VOD content after the stack is removed.
}

export { HarvestJobLambda, HarvestJobLambdaProps, HarvestJobDestinationProps } from './HarvestJobLambda';

function createSourceSpecs(source: string | string[] | SourceSpec[]): SourceSpec[] {
  if (typeof source === 'string') {
    return createSourceSpecs([{ url: source }]);
  }
  return source.map(s => {
    if (typeof s === 'string') {
      if (s.startsWith('s3://')) {
        s = s.replace('s3://', 's3ssl://');
      }
      return { url: s };
    }
    return s;
  });
}
