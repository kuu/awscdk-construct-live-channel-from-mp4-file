import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MediaLive, MediaPackage, LiveChannelFromMp4 } from '../src';

test('Create MediaLive', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new MediaLive(stack, 'MediaLive', {
    sourceUrl: 'https://example.com/test.mp4',
    mediaPackageChannelId: '12345',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaLive::Input', 1);
  template.hasResource('AWS::MediaLive::Channel', 1);
});

test('Create MediaPackage', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new MediaPackage(stack, 'MediaPackage', {
    hlsAdMarkers: 'NONE',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::MediaPackage::Channel', 1);
  template.hasResource('AWS::MediaPackage::OriginEndpoint', 4);
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
});