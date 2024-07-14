import * as crypto from 'crypto';
import {
  CfnChannel,
  CfnOriginEndpoint,
} from 'aws-cdk-lib/aws-mediapackage';
import { Construct } from 'constructs';

export interface MediaPakcageV1MidEndpointSpec {
  readonly segmentDurationSeconds?: number; // The duration of each segment in seconds.
  readonly manifestWindowSeconds?: number; // The duration of manifest in seconds.
  readonly hlsAdMarkers?: string; // Controls how ad markers are included in the packaged endpoint.
  readonly separateAudioRendition?: boolean; // Whether to separate audio rendition.
}

export type MediaPackageV1FullEndpointSpec = (
  CfnOriginEndpoint.HlsPackageProperty
  | CfnOriginEndpoint.DashPackageProperty
  | CfnOriginEndpoint.CmafPackageProperty
  | CfnOriginEndpoint.MssPackageProperty
)[];

export type MediaPakcageV1EndpointSpec = MediaPakcageV1MidEndpointSpec | MediaPackageV1FullEndpointSpec;

export interface MediaPakcageV1Props {
  readonly startoverWindowSeconds?: number; // The duration of startover window in seconds.
  readonly endpointSpec?: MediaPakcageV1EndpointSpec; // The settings for the MediaPackage endpoints.
}

export interface MediaPackageV1EndpointsTable {
  readonly hls?: CfnOriginEndpoint; // The HLS endpoint.
  readonly dash?: CfnOriginEndpoint; // The DASH endpoint.
  readonly cmaf?: CfnOriginEndpoint; // The CMAF endpoint.
  readonly mss?: CfnOriginEndpoint; // The MSS endpoint.
}

function isMediaPakcageV1MidEndpointSpec(spec: MediaPakcageV1EndpointSpec,
): spec is MediaPakcageV1MidEndpointSpec {
  return (spec as MediaPakcageV1MidEndpointSpec).segmentDurationSeconds !== undefined
  || (spec as MediaPakcageV1MidEndpointSpec).manifestWindowSeconds !== undefined
  || (spec as MediaPakcageV1MidEndpointSpec).hlsAdMarkers !== undefined
  || (spec as MediaPakcageV1MidEndpointSpec).separateAudioRendition !== undefined;
}

export class MediaPackageV1 extends Construct {
  public readonly channel: CfnChannel; // The reference to the MediaPackage channel.
  public readonly endpoints: MediaPackageV1EndpointsTable; // The reference to the MediaPackage endpoints.

  constructor(scope: Construct, id: string, {
    startoverWindowSeconds = 0,
    endpointSpec = {
      segmentDurationSeconds: 6,
      manifestWindowSeconds: 60,
      hlsAdMarkers: 'DATERANGE',
      separateAudioRendition: false,
    },
  }: MediaPakcageV1Props) {
    super(scope, id);

    // Create MediaPackage channel
    this.channel = new CfnChannel(this, 'MediaPackageV1Channel', {
      id: `${crypto.randomUUID()}`,
      description: 'MediaPackage channel for testing',
    });

    // Create MediaPackage endpoints
    if (isMediaPakcageV1MidEndpointSpec(endpointSpec)) {

      const {
        segmentDurationSeconds = 6,
        manifestWindowSeconds = 60,
        hlsAdMarkers = 'DATERANGE',
        separateAudioRendition = false,
      } = endpointSpec;

      const adTriggers = [
        'DISTRIBUTOR_ADVERTISEMENT',
        'DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY',
        'DISTRIBUTOR_PLACEMENT_OPPORTUNITY',
        'PROVIDER_ADVERTISEMENT',
        'PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY',
        'PROVIDER_PLACEMENT_OPPORTUNITY',
        'SPLICE_INSERT',
      ];

      this.endpoints = {
        hls: new CfnOriginEndpoint(this, 'MediaPackageV1HlsEndpoint', {
          channelId: this.channel.ref,
          id: `${crypto.randomUUID()}`,
          description: 'MediaPackage HLS endpoint for testing',
          hlsPackage: {
            segmentDurationSeconds,
            playlistWindowSeconds: manifestWindowSeconds,
            adMarkers: hlsAdMarkers,
            adTriggers,
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
            adTriggers,
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
                adTriggers,
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
    } else {
      // endpointSpec is CfnOriginEndpointProps[]
      let hls: CfnOriginEndpoint | undefined;
      let dash: CfnOriginEndpoint | undefined;
      let cmaf: CfnOriginEndpoint | undefined;
      let mss: CfnOriginEndpoint | undefined;
      for (const prop of endpointSpec) {
        if ('hlsPackage' in prop && hls === undefined) {
          hls = new CfnOriginEndpoint(this, 'MediaPackageV1HlsEndpoint', {
            channelId: this.channel.ref,
            id: `${crypto.randomUUID()}`,
            description: 'MediaPackage HLS endpoint for testing',
            hlsPackage: prop.hlsPackage as CfnOriginEndpoint.HlsPackageProperty,
            startoverWindowSeconds,
          });
        } else if ('dashPackage' in prop && dash === undefined) {
          dash = new CfnOriginEndpoint(this, 'MediaPackageV1DashEndpoint', {
            channelId: this.channel.ref,
            id: `${crypto.randomUUID()}`,
            description: 'MediaPackage DASH endpoint for testing',
            dashPackage: prop.dashPackage as CfnOriginEndpoint.DashPackageProperty,
            startoverWindowSeconds,
          });
        } else if ('cmafPackage' in prop && cmaf === undefined) {
          cmaf = new CfnOriginEndpoint(this, 'MediaPackageV1CmafEndpoint', {
            channelId: this.channel.ref,
            id: `${crypto.randomUUID()}`,
            description: 'MediaPackage CMAF endpoint for testing',
            cmafPackage: prop.cmafPackage as CfnOriginEndpoint.CmafPackageProperty,
            startoverWindowSeconds,
          });
        } else if ('mssPackage' in prop && mss === undefined) {
          mss = new CfnOriginEndpoint(this, 'MediaPackageV1MssEndpoint', {
            channelId: this.channel.ref,
            id: `${crypto.randomUUID()}`,
            description: 'MediaPackage MSS endpoint for testing',
            mssPackage: prop.mssPackage as CfnOriginEndpoint.MssPackageProperty,
            startoverWindowSeconds,
          });
        }
      }
      this.endpoints = { hls, dash, cmaf, mss };
    }
  }
}
