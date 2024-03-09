import { Construct } from 'constructs';
import { MediaLive } from './MediaLive';
import { MediaPackage } from './MediaPackage';

export interface LiveChannelFromMp4Props {
  readonly sourceUrl: string; // The URL of the MediaPackage endpoint used by MediaTailor as the content origin.
  readonly timecodeBurninPrefix?: string; // The URL of the ad server used by MediaTailor as the ADS.
  readonly hlsAdMarkers?: string; // The URL of the video file used by MediaTailor as the slate.
}

export class LiveChannelFromMp4 extends Construct {
  public readonly eml: MediaLive;
  public readonly emp: MediaPackage;

  constructor(scope: Construct, id: string, {
    sourceUrl,
    timecodeBurninPrefix,
    hlsAdMarkers,
  }: LiveChannelFromMp4Props) {

    super(scope, id);

    this.emp = new MediaPackage(this, 'MediaPackage', {
      hlsAdMarkers: hlsAdMarkers ?? 'DATERANGE',
    });

    this.eml = new MediaLive(this, 'MediaLive', {
      sourceUrl,
      mediaPackageChannelId: this.emp.channel.id,
      timecodeBurninPrefix,
    });
  }
}
