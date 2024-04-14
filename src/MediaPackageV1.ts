import * as crypto from 'crypto';
import {
  CfnChannel,
  CfnOriginEndpoint,
} from 'aws-cdk-lib/aws-mediapackage';
import { Construct } from 'constructs';

export interface MediaPakcageV1Props {
  readonly segmentDurationSeconds?: number; // The duration of each segment in seconds.
  readonly manifestWindowSeconds?: number; // The duration of manifest in seconds.
  readonly hlsAdMarkers?: string; // Controls how ad markers are included in the packaged endpoint.
  readonly startoverWindowSeconds?: number; // The duration of startover window in seconds.
  readonly separateAudioRendition?: boolean; // Whether to separate audio rendition.
}

export interface MediaPackageV1EndpointsTable {
  readonly hls: CfnOriginEndpoint; // The HLS endpoint.
  readonly dash: CfnOriginEndpoint; // The DASH endpoint.
  readonly cmaf: CfnOriginEndpoint; // The CMAF endpoint.
  readonly mss: CfnOriginEndpoint; // The MSS endpoint.
}

export class MediaPackageV1 extends Construct {
  public readonly channel: CfnChannel; // The reference to the MediaPackage channel.
  public readonly endpoints: MediaPackageV1EndpointsTable; // The reference to the MediaPackage endpoints.

  constructor(scope: Construct, id: string, {
    segmentDurationSeconds = 6,
    manifestWindowSeconds = 60,
    hlsAdMarkers = 'DATERANGE',
    startoverWindowSeconds = 0,
    separateAudioRendition = false,
  }: MediaPakcageV1Props) {

    super(scope, id);

    // Create MediaPackage channel
    this.channel = new CfnChannel(this, 'MediaPackageV1Channel', {
      id: `${crypto.randomUUID()}`,
      description: 'MediaPackage channel for testing',
    });
    // Create MediaPackage endpoints
    this.endpoints = {
      hls: new CfnOriginEndpoint(this, 'MediaPackageV1HlsEndpoint', {
        channelId: this.channel.ref,
        id: `${crypto.randomUUID()}`,
        description: 'MediaPackage HLS endpoint for testing',
        hlsPackage: {
          segmentDurationSeconds,
          playlistWindowSeconds: manifestWindowSeconds,
          adMarkers: hlsAdMarkers,
          adTriggers: ['SPLICE_INSERT'],
          programDateTimeIntervalSeconds: 1,
          useAudioRenditionGroup: separateAudioRendition,
        },
        startoverWindowSeconds,
      }),
      dash: new CfnOriginEndpoint(this, 'MediaPackageV1DashEndpoint', {
        channelId: this.channel.ref,
        id: `${crypto.randomUUID()}`,
        description: 'MediaPackage DASH endpoint for testing',
        dashPackage: {
          segmentDurationSeconds,
          manifestWindowSeconds,
          periodTriggers: ['ADS'],
          adTriggers: ['SPLICE_INSERT'],
        },
        startoverWindowSeconds,
      }),
      cmaf: new CfnOriginEndpoint(this, 'MediaPackageV1CmafEndpoint', {
        channelId: this.channel.ref,
        id: `${crypto.randomUUID()}`,
        description: 'MediaPackage CMAF endpoint for testing',
        cmafPackage: {
          segmentDurationSeconds,
          hlsManifests: [
            {
              id: '1',
              playlistWindowSeconds: manifestWindowSeconds,
              adMarkers: hlsAdMarkers,
              adTriggers: ['SPLICE_INSERT'],
              programDateTimeIntervalSeconds: 1,
            },
          ],
        },
        startoverWindowSeconds,
      }),
      mss: new CfnOriginEndpoint(this, 'MediaPackageV1MssEndpoint', {
        channelId: this.channel.ref,
        id: `${crypto.randomUUID()}`,
        description: 'MediaPackage MSS endpoint for testing',
        mssPackage: {
          segmentDurationSeconds,
          manifestWindowSeconds,
        },
        startoverWindowSeconds,
      }),
    };
  }
}
