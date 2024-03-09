# awscdk-construct-live-channel-from-mp4-file
[![View on Construct Hub](https://constructs.dev/badge?package=awscdk-construct-live-channel-from-mp4-file)](https://constructs.dev/packages/awscdk-construct-live-channel-from-mp4-file)

CDK Construct for setting up a simple live channel for testing
* The input is MP4 file with loop playback
* The output is a live channel with:
  * a single-pipeline MediaLive channel
  * a MediaPackage v1 channel with HLS/DASH/MSS/CMAF endpoints
* You can overlay timecode with a prefix

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
      timecodeBurninPrefix: 'Channel-1',
      hlsAdMarkers: 'DATERANGE',
    });

    // You can access MediaLive channel attributes via `eml.channel`
    new cdk.CfnOutput(this, "MediaLiveChannelId", {
      value: res.eml.channel.attrId,
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
