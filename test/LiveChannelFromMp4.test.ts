import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MediaLive, MediaPackageV1, MediaPackageV2, LiveChannelFromMp4 } from '../src';

test('Create MediaLive', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new MediaLive(stack, 'MediaLive', {
    sources: [
      {
        url: 'https://example.com/test-1.mp4',
      },
      {
        url: 'https://example.com/test-2.mp4',
      },
    ],
    destinations: [{
      id: 'MediaPackageV1',
      mediaPackageSettings: [
        {
          channelId: '12345',
        },
      ],
    }],
    encoderSpec: {
      gopLengthInSeconds: 2,
      outputGroupSettingsList: [
        {
          mediaPackageGroupSettings: {
            destination: {
              destinationRefId: 'MediaPackageV1',
            },
          },
        },
      ],
      outputSettingsList: [
        {
          mediaPackageOutputSettings: {},
        },
      ],
    },
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaLive::Input', 2);
  template.hasResource('AWS::MediaLive::Channel', 1);
});

test('Create MediaPackageV1', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new MediaPackageV1(stack, 'MediaPackage', {
    startoverWindowSeconds: 3600,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaPackage::Channel', 1);
  template.hasResource('AWS::MediaPackage::OriginEndpoint', 4);
});

test('Create MediaPackageV2', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new MediaPackageV2(stack, 'MediaPackage', {
    startoverWindowSeconds: 3600,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaPackageV2::Channel', 1);
  template.hasResource('AWS::MediaPackageV2::OriginEndpoint', 3);
});

test('Create LiveChannelFromMp4', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new LiveChannelFromMp4(stack, 'LiveChannelFromMp4', {
    source: 'https://example.com/test.mp4',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaLive::Channel', 1);
  template.hasResource('AWS::MediaPackage::Channel', 1);
  template.hasResource('AWS::MediaPackage::OriginEndpoint', 4);
  template.hasResource('AWS::MediaPackageV2::Channel', 1);
  template.hasResource('AWS::MediaPackageV2::OriginEndpoint', 3);
});

test('Create LiveChannelFromMp4 with TC in source', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new LiveChannelFromMp4(stack, 'LiveChannelFromMp4withTC', {
    source: [
      {
        url: 'https://example.com/test-1.mp4',
        conversionType: 'NONE',
      }, {
        url: 'https://example.com/test-2.mp4',
        conversionType: 'RTP_PUSH',
      },
    ],
    encoderSpec: {
      gopLengthInSeconds: 2,
    },
    packagerSpec: {
      segmentDurationSeconds: 4,
    },
    mediaPackageVersionSpec: 'V2_ONLY',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaLive::Input', 3);
  template.hasResource('AWS::MediaLive::InputSecurityGroup', 3);
  template.hasResource('AWS::MediaLive::Channel', 2);
  template.hasResource('AWS::MediaPackageV2::Channel', 1);
  template.hasResource('AWS::MediaPackageV2::OriginEndpoint', 3);
});

/*
test('Create LiveChannelFromMp4 with a harvest job', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  const ch = new LiveChannelFromMp4(stack, 'LiveChannelFromMp4', {
    source: 'https://example.com/test.mp4',
    mediaPackageVersionSpec: 'V1_ONLY',
  }), const { empv1: emp } = ch;

  if (emp?.endpoints.hls) {
    const job = ch.createHarvestJob({
      endpoint: emp.endpoints.hls,
      publish: true,
    });
    console.log(job.publishedUrl);
  }

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaLive::Channel', 1);
  template.hasResource('AWS::MediaPackage::Channel', 1);
  template.hasResource('AWS::MediaPackage::OriginEndpoint', 4);
  template.hasResource('AWS::S3::Bucket', 1);
  template.hasResource('AWS::Lambda::Function', 1);
  template.hasResource('AWS::CloudFront::Distribution', 1);
});
*/