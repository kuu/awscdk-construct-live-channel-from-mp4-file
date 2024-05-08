import * as crypto from 'crypto';
import { Aws } from 'aws-cdk-lib';
import {
  CfnChannelGroup,
  CfnChannel,
  CfnOriginEndpoint,
  CfnOriginEndpointPolicy,
} from 'aws-cdk-lib/aws-mediapackagev2';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  PhysicalResourceId,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface MediaPakcageV2Props {
  readonly segmentDurationSeconds?: number; // The duration of each segment in seconds.
  readonly manifestWindowSeconds?: number; // The duration of manifest in seconds.
  readonly hlsAdMarkers?: string; // Controls how ad markers are included in the packaged endpoint.
  readonly startoverWindowSeconds?: number; // The duration of startover window in seconds.
  readonly separateAudioRendition?: boolean; // Whether to separate audio rendition.
  readonly channelGroupName?: string; // The name of the channel group to be used.
  readonly omitLlHls?: boolean; // Whether to skip the creation of a Low Latency HLS endpoint.
}

export interface MediaPackageV2EndpointsTable {
  readonly hls: CfnOriginEndpoint; // The HLS endpoint.
  readonly llHls: CfnOriginEndpoint | undefined; // The low-latency HLS endpoint.
  // The DASH endpoint.
}

export interface MediaPackageV2EndpointUrlsTable {
  readonly hls: string; // The HLS endpoint.
  readonly llHls: string | undefined; // The low-latency HLS endpoint.
}

export interface IMediaPackageV2IngestEndpoint {
  readonly url: string;
}

export class MediaPackageV2 extends Construct {
  public readonly channelGroup?: CfnChannelGroup; // The reference to the MediaPackage channel group.
  public readonly channel: CfnChannel; // The reference to the MediaPackage channel.
  public readonly endpoints: MediaPackageV2EndpointsTable; // The reference to the MediaPackage endpoints.
  public readonly ingestEndpoints: IMediaPackageV2IngestEndpoint[]; // MediaPackageV2 channel's ingest endpoints.
  public readonly endpointUrls: MediaPackageV2EndpointUrlsTable; // MediaPackageV2 endpoint URLs.

  constructor(scope: Construct, id: string, {
    segmentDurationSeconds = 6,
    manifestWindowSeconds = 60,
    hlsAdMarkers = 'DATERANGE',
    startoverWindowSeconds = 60,
    separateAudioRendition = false,
    channelGroupName,
    omitLlHls,
  }: MediaPakcageV2Props) {

    super(scope, id);

    const CHANNEL_GROUP_NAME = channelGroupName ?? `${crypto.randomUUID()}`;
    const CHANNEL_NAME = `${crypto.randomUUID()}`;
    const ENDPOINT_NAME_HLS = `${crypto.randomUUID()}`;
    const ENDPOINT_NAME_LLHLS = `${crypto.randomUUID()}`;

    const scteFilter = [
      'SPLICE_INSERT',
      'PROVIDER_ADVERTISEMENT', 'DISTRIBUTOR_ADVERTISEMENT',
      'PROVIDER_PLACEMENT_OPPORTUNITY', 'DISTRIBUTOR_PLACEMENT_OPPORTUNITY',
    ];

    if (!channelGroupName) {
      // Create MediaPackage channel group
      this.channelGroup = new CfnChannelGroup(this, 'MediaPackageV2ChannelGroup', {
        channelGroupName: CHANNEL_GROUP_NAME,
        description: `EMP channel group created by ${Aws.STACK_NAME}`,
      });
    }
    // Create MediaPackage channel
    this.channel = new CfnChannel(this, 'MediaPackageV2Channel', {
      channelGroupName: CHANNEL_GROUP_NAME,
      channelName: CHANNEL_NAME,
      description: `EMP channel created by ${Aws.STACK_NAME}`,
    });
    // Create AWS Custom Resource to retrieve ingesstion endpoint URLs (as unable to retrieve from CfnChannel)
    const res = new AwsCustomResource(this, 'MediaPackageV2ChannelIngestEndpoints', {
      onCreate: {
        service: 'MediaPackageV2',
        action: 'GetChannel',
        parameters: {
          ChannelGroupName: CHANNEL_GROUP_NAME,
          ChannelName: CHANNEL_NAME,
        },
        physicalResourceId: PhysicalResourceId.of(`${crypto.randomUUID()}`),
        outputPaths: ['IngestEndpoints'],
      },
      //Will ignore any resource and use the assumedRoleArn as resource and 'sts:AssumeRole' for service:action
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });
    this.ingestEndpoints = [
      { url: res.getResponseField('IngestEndpoints.0.Url') },
      { url: res.getResponseField('IngestEndpoints.1.Url') },
    ];
    // Create MediaPackage endpoints
    this.endpoints = {
      hls: new CfnOriginEndpoint(this, 'MediaPackageV2HlsEndpoint', {
        channelGroupName: CHANNEL_GROUP_NAME,
        channelName: CHANNEL_NAME,
        originEndpointName: ENDPOINT_NAME_HLS,
        description: `HLS endpoint created by ${Aws.STACK_NAME}`,

        // the properties below are optional
        containerType: 'TS',
        hlsManifests: [{
          manifestName: 'index',
          manifestWindowSeconds,
          programDateTimeIntervalSeconds: 1,
          scteHls: {
            adMarkerHls: hlsAdMarkers,
          },
        }],
        segment: {
          includeIframeOnlyStreams: false,
          scte: {
            scteFilter,
          },
          segmentDurationSeconds,
          tsUseAudioRenditionGroup: separateAudioRendition,
        },
        startoverWindowSeconds,
      }),
      llHls: omitLlHls ? undefined : new CfnOriginEndpoint(this, 'MediaPackageV2LlHlsEndpoint', {
        channelGroupName: CHANNEL_GROUP_NAME,
        channelName: CHANNEL_NAME,
        originEndpointName: ENDPOINT_NAME_LLHLS,
        description: `LL-HLS endpoint created by ${Aws.STACK_NAME}`,

        // the properties below are optional
        containerType: 'CMAF',
        lowLatencyHlsManifests: [{
          manifestName: 'index-ll',
          manifestWindowSeconds: 30,
          programDateTimeIntervalSeconds: 1,
          scteHls: {
            adMarkerHls: hlsAdMarkers,
          },
        }],
        segment: {
          includeIframeOnlyStreams: false,
          scte: {
            scteFilter,
          },
          segmentDurationSeconds: 2,
          tsUseAudioRenditionGroup: separateAudioRendition,
        },
        startoverWindowSeconds,
      }),
    };
    new CfnOriginEndpointPolicy(this, 'MediaPackageV2OriginEndpointPolicyHLS', {
      channelGroupName: CHANNEL_GROUP_NAME,
      channelName: CHANNEL_NAME,
      originEndpointName: ENDPOINT_NAME_HLS,
      policy: {
        Version: '2012-10-17',
        Id: 'AnonymousAccessPolicy',
        Statement: [{
          Sid: 'AllowAnonymousAccess',
          Effect: 'Allow',
          Principal: '*',
          Action: 'mediapackagev2:GetObject',
          Resource: this.endpoints.hls.attrArn,
        }],
      },
    });
    omitLlHls ?? new CfnOriginEndpointPolicy(this, 'MediaPackageV2OriginEndpointPolicyLLHLS', {
      channelGroupName: CHANNEL_GROUP_NAME,
      channelName: CHANNEL_NAME,
      originEndpointName: ENDPOINT_NAME_LLHLS,
      policy: {
        Version: '2012-10-17',
        Id: 'AnonymousAccessPolicy',
        Statement: [{
          Sid: 'AllowAnonymousAccess',
          Effect: 'Allow',
          Principal: '*',
          Action: 'mediapackagev2:GetObject',
          Resource: this.endpoints.llHls?.attrArn,
        }],
      },
    });
    // Create AWS Custom Resource to retrieve endpoint URLs (as unable to retrieve from CfnOriginEndpoint)
    const hlsEndpoint = new AwsCustomResource(this, 'MediaPackageV2HlsEndpointUrl', {
      onCreate: {
        service: 'MediaPackageV2',
        action: 'GetOriginEndpoint',
        parameters: {
          ChannelGroupName: CHANNEL_GROUP_NAME,
          ChannelName: CHANNEL_NAME,
          OriginEndpointName: ENDPOINT_NAME_HLS,
        },
        physicalResourceId: PhysicalResourceId.of(`${crypto.randomUUID()}`),
        outputPaths: ['HlsManifests'],
      },
      //Will ignore any resource and use the assumedRoleArn as resource and 'sts:AssumeRole' for service:action
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });
    const llHlsEndpoint = omitLlHls ? undefined : new AwsCustomResource(this, 'MediaPackageV2LlHlsEndpointUrl', {
      onCreate: {
        service: 'MediaPackageV2',
        action: 'GetOriginEndpoint',
        parameters: {
          ChannelGroupName: CHANNEL_GROUP_NAME,
          ChannelName: CHANNEL_NAME,
          OriginEndpointName: ENDPOINT_NAME_LLHLS,
        },
        physicalResourceId: PhysicalResourceId.of(`${crypto.randomUUID()}`),
        outputPaths: ['LowLatencyHlsManifests'],
      },
      //Will ignore any resource and use the assumedRoleArn as resource and 'sts:AssumeRole' for service:action
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });
    this.endpointUrls = {
      hls: hlsEndpoint.getResponseField('HlsManifests.0.Url'),
      llHls: llHlsEndpoint?.getResponseField('LowLatencyHlsManifests.0.Url'),
    };
  }
}
