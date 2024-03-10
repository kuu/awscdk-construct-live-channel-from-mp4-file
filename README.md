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

    // Create a single-pipeline MediaLive channel with MediaPackage endpoints
    const res = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
      sourceUrl: 'https://example.com/test.mp4',
      channelClass: 'STANDARD', // optional: default = 'SINGLE_PIPELINE'
      gopLengthInSeconds: 2, // optional: default = 3
      segmentDurationSeconds: 4, // optional: default = 6
      manifestWindowSeconds: 20, // optional: default = 60
      timecodeBurninPrefix: 'Channel-1', // optional: default = no timecode overlay
      hlsAdMarkers: 'SCTE_ENHANCED', // optional: default = DATERANGE
    });

    // You can access MediaLive channel attributes via `eml.channel`
    new cdk.CfnOutput(this, "MediaLiveChannelId", {
      value: res.eml.channel.ref,
      exportName: cdk.Aws.STACK_NAME + "MediaLiveChannelId",
      description: "MediaLive channel ID",
    });

    // You can access MediaPackage endpoints attributes via `emp.endpoints`
    new cdk.CfnOutput(this, "MediaPackageHlsEndpoint", {
      value: res.emp.endpoints['hls'].attrUrl,
      exportName: cdk.Aws.STACK_NAME + "MediaPackageHlsEndpoint",
      description: "MediaPackage HLS endpoint URL",
    });
  }
}
```
