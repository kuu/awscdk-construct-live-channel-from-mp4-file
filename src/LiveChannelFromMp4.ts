import { Construct } from 'constructs';
import { MediaLive } from './MediaLive';
import { MediaPackage } from './MediaPackage';

export interface LiveChannelFromMp4Props {
  readonly sourceUrl: string; // The URL of the MP4 file used by MediaLive as the source.
  readonly gopLengthInSeconds?: number; // The length of the GOP in seconds.
  readonly timecodeBurninPrefix?: string; // The prefix for the timecode burn-in.
  readonly segmentDurationSeconds?: number; // The duration of each segment in seconds.
  readonly manifestWindowSeconds?: number; // The duration of manifest in seconds.
  readonly hlsAdMarkers?: string; // Controls how ad markers are included in the packaged endpoint.
}

export class LiveChannelFromMp4 extends Construct {
  public readonly eml: MediaLive; // The reference to the MediaLive input/channel.
  public readonly emp: MediaPackage; // The reference to the MediaPackage channel/endpoints.

  constructor(scope: Construct, id: string, {
    sourceUrl,
    gopLengthInSeconds,
    timecodeBurninPrefix,
    segmentDurationSeconds,
    manifestWindowSeconds,
    hlsAdMarkers,
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
      gopLengthInSeconds,
      timecodeBurninPrefix,
    });
  }
}
