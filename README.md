# awscdk-construct-live-channel-from-mp4-file
[![View on Construct Hub](https://constructs.dev/badge?package=awscdk-construct-live-channel-from-mp4-file)](https://constructs.dev/packages/awscdk-construct-live-channel-from-mp4-file)

CDK Construct for deploying a live video channel using AWS Elemental MediaLive and MediaPackage
* The input is MP4 files
* The output is MediaPackage V1 and V2 endpoints
* You can specify encoding/packaging settings or leave them default

## Install
[![NPM](https://nodei.co/npm/awscdk-construct-live-channel-from-mp4-file.png?mini=true)](https://nodei.co/npm/awscdk-construct-live-channel-from-mp4-file/)

## Usage

### Sample code
Here's an example for setting up a SINGLE_PIPELINE MediaLive channel using a local MP4 file (`./upload/test.mp4`) as an input to get MediaPackage v1 and v2 endpoints

```ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FilePublisher } from 'awscdk-construct-file-publisher';
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file';

export class ExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Upload all the files in the local folder (./upload) to S3
    const publicFolder = new FilePublisher(this, 'FilePublisher', {
      path: './upload',
    });

    // Create a MediaLive channel with MediaPackage V1/V2 endpoints
    const { eml, empv1, empv2 } = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
      source: `${publicFolder.url}/test.mp4`, // required
      channelClass: 'STANDARD', // optional: default = 'SINGLE_PIPELINE'
      encoderSpec: {
        gopLengthInSeconds: 2, // optional: default = 3
        timecodeBurninPrefix: 'Ch1', // optional: default = no timecode overlay
      },
      mediaPackageVersionSpec: 'V1_AND_V2', // optional: default = 'V1_AND_V2'
      packagerSpec: {
        segmentDurationSeconds: 4, // optional: default = 6
        manifestWindowSeconds: 20, // optional: default = 60
      },
      autoStart: true, // optional: default = true
    });

    // Access MediaLive channel attributes via `eml.channel`
    new cdk.CfnOutput(this, "MediaLiveChannelId", {
      value: eml.channel.ref,
      exportName: cdk.Aws.STACK_NAME + "MediaLiveChannelId",
      description: "MediaLive channel ID",
    });

    // Access MediaPackage_v1 endpoints attributes via `empv1.endpoints`
    if (empv1?.endpoints) {
      new cdk.CfnOutput(this, "MediaPackageV1HlsEndpoint", {
        value: empv1.endpoints.hls.attrUrl,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV1HlsEndpoint",
        description: "MediaPackage V1 HLS endpoint URL",
      });
      new cdk.CfnOutput(this, "MediaPackageV1DashEndpoint", {
        value: empv1.endpoints.dash.attrUrl,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV1DashEndpoint",
        description: "MediaPackage V1 DASH endpoint URL",
      });
      new cdk.CfnOutput(this, "MediaPackageV1CmafEndpoint", {
        value: empv1.endpoints.cmaf.attrUrl,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV1CmafEndpoint",
        description: "MediaPackage V1 CMAF (HLS with fMP4) endpoint URL",
      });
      new cdk.CfnOutput(this, "MediaPackageV1MssEndpoint", {
        value: empv1.endpoints.mss.attrUrl,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV1MssEndpoint",
        description: "MediaPackage V1 Microsoft Smooth Streaming endpoint URL",
      });
    }

    // Access MediaPackage_v2 endpoint URLs via `empv2.endpointUrls`
    if (empv2?.endpointUrls) {
      new cdk.CfnOutput(this, "MediaPackageV2HlsEndpoint", {
        value: empv2.endpointUrls.hls,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV2HlsEndpoint",
        description: "MediaPackage V2 HLS endpoint URL",
      });
      new cdk.CfnOutput(this, "MediaPackageV2LlHlsEndpoint", {
        value: empv2.endpointUrls.llHls,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV2LlHlsEndpoint",
        description: "MediaPackage V2 Low-Latency HLS endpoint URL",
      });
      new cdk.CfnOutput(this, "MediaPackageV2DashEndpoint", {
        value: empv2.endpointUrls.dash,
        exportName: cdk.Aws.STACK_NAME + "MediaPackageV2DashEndpoint",
        description: "MediaPackage V2 DASH endpoint URL",
      });
    }

  }
}
```

### Sample code (Harvest Job)

```ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file';
import { ScteScheduler } from 'awscdk-construct-scte-scheduler';

export class ExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Create a MediaLive channel with MediaPackage V1 endpoints
    const ch = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
      source: `s3://my-bucket/test.mp4`,
    }), {eml, empv1: emp} = ch;

    // Harvest the HLS endpoint
    if (emp?.endpoints.hls) {
      // Get a Lambda function that schedules a harvest job
      const harvestJob = ch.createHarvestJob({
        endpoint: emp.endpoints.hls,
      });
      // Invoke the function after inserting a 30-sec ad break 50 times
      new ScteScheduler(this, 'ScteScheduler', {
        channelId: eml.channel.ref,
        scteDurationInSeconds: 30,
        intervalInMinutes: 1,
        repeatCount: 50,
        callback: harvestJob.func,
      });

      // Print the S3 URL of the harvested VOD content
      new cdk.CfnOutput(this, "HarvestedVODURL", {
        value: harvestJob.s3Url,
        exportName: cdk.Aws.STACK_NAME + "HarvestedVODURL",
        description: "Harvested VOD URL",
      });
    }
  }
}
```

### Possible configurations

#### Input
The input needs to be a single or multiple MP4 file(s). The following formats are supported:
* Local filesystem path (using `FilePublisher` like the above code)
* URL (`http://` and `https://`)
* S3 URL (`s3://` and `s3ssl://`)

Also, you can convert File inputs into Push inputs before they're ingested by MediaPackage
The following code creates 3x inputs with different routes:
* MP4 ---> MediaLive ---> MediaPackage (defalut)
* MP4 ---> MediaLive ---(RTP_PUSH)---> MediaLive ---> MediaPackage
* MP4 ---> MediaLive ---(RTMP_PUSH)---> MediaLive ---> MediaPackage
```ts
// Create a live channel with 3x inputs
const {eml, empv1, empv2} = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
  source: [
    {
      url: 's3://aems-input/test-1.mp4',
      conversionType: 'NONE', // default
    },
    {
      url: 's3://aems-input/test-2.mp4',
      conversionType: 'RTP_PUSH',
    },
    {
      url: 's3://aems-input/test-3.mp4',
      conversionType: 'RTMP_PUSH',
    },
  ],
  autoStart: true,
});
```

#### Output
By default, all possible endpoints will be created for each version of MediaPackage:
* (MediaLive's MediaPackage output)---> MediaPackage V1 channel with 4x endpoints (HLS/DASH/CMAF/MSS)
* (MediaLive's HLS output)---> MediaPackage V2 channel with 3x endpoints (HLS/LL-HLS/DASH)

You can specify only necessary MediaPackage version:
```ts
// Create a live channel with all MediaPackageV2 endpoints but LL-HLS
const {eml, empv2} = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
  source: 's3://aems-input/test-1.mp4',
  mediaPackageVersionSpec: 'V2_ONLY', // default = 'V1_AND_V2'
  mediaPackageV2Settings: {
    omitLlHls: true, // default = false
  }
});
```

#### Encoding/Packaging
By default, the following parameters will be used for encoding and packaging:
* Encoding
  * SINGLE_PIPELINE --> configurable
  * Frame rate 29.97fps
  * ABR with 3x bitrates (720p/540p/360p)
  * GOP length: 3 seconds --> configurable
  * Time-code burn-in: none --> configurable
* Packaging
  * Segment length: 6 seconds --> configurable
  * Manifest length: 60 seconds --> configurable
  * DVR window: none --> configurable
  * Separate audio/video renditions: no separation (muxed) --> configurable
  * HLS ad marker: DATERANGE --> configurable

You can further configure the encoding/packaging behavior using low-level settings:
```ts
// Create a live channel using CfnChannel and CfnOriginEndpoint props
const {eml, empv1, empv2} = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
  source: 's3://aems-input/test-1.mp4',
  encoderSpec: { // CfnChannel.EncoderSettingsProperty
    outputGroups, // CfnChannel.OutputGroupProperty[]
    videDescriptions, // CfnChannel.VideoDescriptionProperty[]
    audioDescriptions, // CfnChannel.AudioDescriptionProperty[]
    timecodeConfig, // 'SYSTEMCLOCK' | 'EMBEDDED'
    availBlanking, // CfnChannel.AvailBlankingProperty
  },
  packagerSpec: { // MediaPakcageV1Props
    startoverWindowSeconds, // 0 ~ 1209600 (14 days)
    endpointSpec, // CfnOriginEndpoint.XxxPackageProperty (Hls/Dash/Cmaf/Mss)
  } or { // MediaPakcageV2Props
    channelGroupName, // Existing channel group
    startoverWindowSeconds, // 0 ~ 1209600 (14 days)
    endpointSpec: {
      containerType, // 'TS' | 'CMAF'
      manifests, // CfnOriginEndpoint.XxxManifestConfigurationProperty[] (Hls/LowLatencyHls/Dash)
      segment, // CfnOriginEndpoint.SegmentProperty
    }
  }
});
```
