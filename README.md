# awscdk-construct-live-channel-from-mp4-file
[![View on Construct Hub](https://constructs.dev/badge?package=awscdk-construct-live-channel-from-mp4-file)](https://constructs.dev/packages/awscdk-construct-live-channel-from-mp4-file)

CDK Construct for setting up a simple live channel for testing
* The input is an MP4 file with loop playback
* The output is a live channel with:
  * a MediaLive channel with 29.97fps, 3x bitrates (720p/540p/360p)
  * a MediaPackage v1 channel with HLS/DASH/MSS/CMAF endpoints
* You can add timecode overay with a prefix for visual confirmation
* You can configure:
  * Channel class: STANDARD or SINGLE_PIPELINE
  * GOP length
  * Segment length
  * Manifest length

## Install
[![NPM](https://nodei.co/npm/awscdk-construct-live-channel-from-mp4-file.png?mini=true)](https://nodei.co/npm/awscdk-construct-live-channel-from-mp4-file/)

## Usage
```ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file';

export class ExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a MediaLive channel with MediaPackage V1/V2 endpoints
    const { eml, empv1, empv2 } = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
      sourceUrl: 'https://example.com/test.mp4',
      channelClass: 'STANDARD', // optional: default = 'SINGLE_PIPELINE'
      gopLengthInSeconds: 2, // optional: default = 3
      segmentDurationSeconds: 4, // optional: default = 6
      manifestWindowSeconds: 20, // optional: default = 60
      timecodeBurninPrefix: 'Ch1', // optional: default = no timecode overlay
      hlsAdMarkers: 'SCTE_ENHANCED', // optional: default = DATERANGE
      autoStart: true, // optional: default = false
      startoverWindowSeconds: 1209600, // optional: default = V1: 0, V2: 60
      separateAudioRendition: true, // optional: default = false
      mediaPackageV2ChannelGroupName: 'my-first-channel-group', // optional: default = a new channel group will be created with a random UUID
      mediaPackageVersionSpec: 'V1_ONLY', // optional: default = 'V1_AND_V2'
    });

    // You can access MediaLive channel attributes via `eml.channel`
    new cdk.CfnOutput(this, "MediaLiveChannelId", {
      value: eml.channel.ref,
      exportName: cdk.Aws.STACK_NAME + "MediaLiveChannelId",
      description: "MediaLive channel ID",
    });

    // You can access MediaPackage_v1 endpoints attributes via `empv1.endpoints`
    if (empv1) {
      new cdk.CfnOutput(this, "MediaPackageV1HlsEndpoint", {
        value: empv1.endpoints.hls.attrUrl,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV1HlsEndpoint",
        description: "MediaPackage V1 HLS endpoint URL",
      });
    }

    // You can access MediaPackage_v2 endpoint URLs via `empv2.endpointUrls`
    if (empv2) {
      const {hls, llHls} = empv2.endpointUrls;
      new cdk.CfnOutput(this, "MediaPackageV2HlsEndpoint", {
        value: hls,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV2HlsEndpoint",
        description: "MediaPackage V2 HLS endpoint URL",
      });
      new cdk.CfnOutput(this, "MediaPackageV2LlHlsEndpoint", {
        value: llHls,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV2LlHlsEndpoint",
        description: "MediaPackage V2 LL-HLS endpoint URL",
      });
    }

  }
}
```
