import {
  Aws,
} from 'aws-cdk-lib';

import {
  CfnChannel,
  CfnOriginEndpoint,
} from 'aws-cdk-lib/aws-mediapackage';

import { Construct } from 'constructs';

export interface MediaPakcageProps {
  readonly hlsAdMarkers: string;
}

export interface MediaPackageEndpointsTable {
  readonly hls: CfnOriginEndpoint;
  readonly dash: CfnOriginEndpoint;
  readonly cmaf: CfnOriginEndpoint;
  readonly mss: CfnOriginEndpoint;
}

export class MediaPackage extends Construct {
  public readonly channel: CfnChannel;
  public readonly endpoints: MediaPackageEndpointsTable;

  constructor(scope: Construct, id: string, {
    hlsAdMarkers,
  }: MediaPakcageProps) {

    super(scope, id);

    // Create MediaPackage channel
    this.channel = new CfnChannel(this, 'MyCfnChannel', {
      id: Aws.STACK_NAME + '_EMP-Channel',
      description: 'MediaPackage channel for testing',
    });
    // Create MediaPackage endpoints
    this.endpoints = {
      hls: new CfnOriginEndpoint(this, 'MyHLSEndpoint', {
        channelId: this.channel.id,
        id: Aws.STACK_NAME + '_EMP-HLSEndpoint',
        description: 'MediaPackage HLS endpoint for testing',
        hlsPackage: {
          segmentDurationSeconds: 6,
          playlistWindowSeconds: 60,
          adMarkers: hlsAdMarkers,
          adTriggers: ['SPLICE_INSERT'],
          programDateTimeIntervalSeconds: 1,
        },
      }),
      dash: new CfnOriginEndpoint(this, 'MyDASHEndpoint', {
        channelId: this.channel.id,
        id: Aws.STACK_NAME + '_EMP-DASHEndpoint',
        description: 'MediaPackage DASH endpoint for testing',
        dashPackage: {
          segmentDurationSeconds: 6,
          manifestWindowSeconds: 60,
          periodTriggers: ['ADS'],
          adTriggers: ['SPLICE_INSERT'],
        },
      }),
      cmaf: new CfnOriginEndpoint(this, 'MyCMAFEndpoint', {
        channelId: this.channel.id,
        id: Aws.STACK_NAME + '_EMP-CMAFEndpoint',
        description: 'MediaPackage CMAF endpoint for testing',
        cmafPackage: {
          segmentDurationSeconds: 6,
          hlsManifests: [
            {
              id: '1',
              adMarkers: hlsAdMarkers,
              adTriggers: ['SPLICE_INSERT'],
              programDateTimeIntervalSeconds: 1,
            },
          ],
        },
      }),
      mss: new CfnOriginEndpoint(this, 'MyMSSEndpoint', {
        channelId: this.channel.id,
        id: Aws.STACK_NAME + '_EMP-MSSEndpoint',
        description: 'MediaPackage MSS endpoint for testing',
        mssPackage: {},
      }),
    };
  }
}
