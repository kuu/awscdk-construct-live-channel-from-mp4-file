import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MediaLive, MediaPackageV1, MediaPackageV2, LiveChannelFromMp4 } from '../src';

test('Create MediaLive', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new MediaLive(stack, 'MediaLive', {
    sourceUrls: [
      'https://example.com/test-1.mp4',
      'https://example.com/test-2.mp4',
    ],
    destinations: [{
      id: 'MediaPackageV1',
      mediaPackageSettings: [
        {
          channelId: '12345',
        },
      ],
    }],
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
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaLive::Input', 2);
  template.hasResource('AWS::MediaLive::Channel', 1);
});

test('Create MediaPackageV1', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new MediaPackageV1(stack, 'MediaPackage', {
    hlsAdMarkers: 'NONE',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaPackage::Channel', 1);
  template.hasResource('AWS::MediaPackage::OriginEndpoint', 4);
});

test('Create MediaPackageV2', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new MediaPackageV2(stack, 'MediaPackage', {
    hlsAdMarkers: 'NONE',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaPackageV2::Channel', 1);
  template.hasResource('AWS::MediaPackageV2::OriginEndpoint', 2);
});

test('Create LiveChannelFromMp4', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new LiveChannelFromMp4(stack, 'LiveChannelFromMp4', {
    sourceUrl: 'https://example.com/test.mp4',
    hlsAdMarkers: 'NONE',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaLive::Channel', 1);
  template.hasResource('AWS::MediaPackage::Channel', 1);
  template.hasResource('AWS::MediaPackage::OriginEndpoint', 4);
  template.hasResource('AWS::MediaPackageV2::Channel', 1);
  template.hasResource('AWS::MediaPackageV2::OriginEndpoint', 2);
});

test('Create LiveChannelFromMp4 with TC in source', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new LiveChannelFromMp4(stack, 'LiveChannelFromMp4withTC', {
    sourceUrl: 'https://example.com/test.mp4',
    hlsAdMarkers: 'NONE',
    hasTimecodeInSource: true,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaLive::Channel', 2);
  template.hasResource('AWS::MediaPackage::Channel', 1);
  template.hasResource('AWS::MediaPackage::OriginEndpoint', 4);
  template.hasResource('AWS::MediaPackageV2::Channel', 1);
  template.hasResource('AWS::MediaPackageV2::OriginEndpoint', 2);
});
