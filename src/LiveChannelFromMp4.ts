import * as crypto from 'crypto';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { MediaLive } from './MediaLive';
import { MediaPackage } from './MediaPackage';

export interface LiveChannelFromMp4Props {
  readonly sourceUrl: string; // The URL of the MP4 file used by MediaLive as the source.
  readonly channelClass?: string; // The class of the channel. (STANDARD or SINGLE_PIPELINE)
  readonly gopLengthInSeconds?: number; // The length of the GOP in seconds.
  readonly timecodeBurninPrefix?: string; // The prefix for the timecode burn-in.
  readonly segmentDurationSeconds?: number; // The duration of each segment in seconds.
  readonly manifestWindowSeconds?: number; // The duration of manifest in seconds.
  readonly hlsAdMarkers?: string; // Controls how ad markers are included in the packaged endpoint.
  readonly autoStart?: boolean; // Whether to start the channel automatically.
}

export class LiveChannelFromMp4 extends Construct {
  public readonly eml: MediaLive; // The reference to the MediaLive input/channel.
  public readonly emp: MediaPackage; // The reference to the MediaPackage channel/endpoints.

  constructor(scope: Construct, id: string, {
    sourceUrl,
    channelClass,
    gopLengthInSeconds,
    timecodeBurninPrefix,
    segmentDurationSeconds,
    manifestWindowSeconds,
    hlsAdMarkers,
    autoStart = false,
  }: LiveChannelFromMp4Props) {

    super(scope, id);

    this.emp = new MediaPackage(this, 'MediaPackage', {
      segmentDurationSeconds,
      manifestWindowSeconds,
      hlsAdMarkers: hlsAdMarkers,
    });

    this.eml = new MediaLive(this, 'MediaLive', {
      sourceUrl,
      mediaPackageChannelId: this.emp.channel.id,
      channelClass,
      gopLengthInSeconds,
      timecodeBurninPrefix,
    });

    if (autoStart) {
      try {
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
      } catch {
        console.error('Failed to start MediaLive channel');
      }
    }
  }
}
