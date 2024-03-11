import * as crypto from 'crypto';

import {
  CfnChannel,
  CfnOriginEndpoint,
} from 'aws-cdk-lib/aws-mediapackage';

import { Construct } from 'constructs';

export interface MediaPakcageProps {
  readonly segmentDurationSeconds?: number; // The duration of each segment in seconds.
  readonly manifestWindowSeconds?: number; // The duration of manifest in seconds.
  readonly hlsAdMarkers?: string; // Controls how ad markers are included in the packaged endpoint.
}

export interface MediaPackageEndpointsTable {
  readonly hls: CfnOriginEndpoint; // The HLS endpoint.
  readonly dash: CfnOriginEndpoint; // The DASH endpoint.
  readonly cmaf: CfnOriginEndpoint; // The CMAF endpoint.
  readonly mss: CfnOriginEndpoint; // The MSS endpoint.
}

export class MediaPackage extends Construct {
  public readonly channel: CfnChannel; // The reference to the MediaPackage channel.
  public readonly endpoints: MediaPackageEndpointsTable; // The reference to the MediaPackage endpoints.

  constructor(scope: Construct, id: string, {
    segmentDurationSeconds = 6,
    manifestWindowSeconds = 60,
    hlsAdMarkers = 'DATERANGE',
  }: MediaPakcageProps) {

    super(scope, id);

    // Create MediaPackage channel
    this.channel = new CfnChannel(this, 'CfnChannel', {
      id: `${crypto.randomUUID()}`,
      description: 'MediaPackage channel for testing',
    });
    // Create MediaPackage endpoints
    this.endpoints = {
      hls: new CfnOriginEndpoint(this, 'CfnOriginEndpoint-HLS', {
        channelId: this.channel.ref,
        id: `${crypto.randomUUID()}`,
        description: 'MediaPackage HLS endpoint for testing',
        hlsPackage: {
          segmentDurationSeconds,
          playlistWindowSeconds: manifestWindowSeconds,
          adMarkers: hlsAdMarkers,
          adTriggers: ['SPLICE_INSERT'],
          programDateTimeIntervalSeconds: 1,
        },
      }),
      dash: new CfnOriginEndpoint(this, 'CfnOriginEndpoint-DASH', {
        channelId: this.channel.ref,
        id: `${crypto.randomUUID()}`,
        description: 'MediaPackage DASH endpoint for testing',
        dashPackage: {
          segmentDurationSeconds,
          manifestWindowSeconds,
          periodTriggers: ['ADS'],
          adTriggers: ['SPLICE_INSERT'],
        },
      }),
      cmaf: new CfnOriginEndpoint(this, 'CfnOriginEndpoint-CMAF', {
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
      }),
      mss: new CfnOriginEndpoint(this, 'CfnOriginEndpoint-MSS', {
        channelId: this.channel.ref,
        id: `${crypto.randomUUID()}`,
        description: 'MediaPackage MSS endpoint for testing',
        mssPackage: {
          segmentDurationSeconds,
          manifestWindowSeconds,
        },
      }),
    };
  }
}
