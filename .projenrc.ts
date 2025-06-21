import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.200.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.9',
  name: 'awscdk-construct-live-channel-from-mp4-file',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kuu/awscdk-construct-live-channel-from-mp4-file.git',
  keywords: [
    'cdk',
    'cdk-construct',
    'MediaLive',
    'MediaPackage',
  ],
  license: 'MIT',
  licensed: true,
  majorVersion: 1,

  deps: [
    'aws-cdk-lib',
    'constructs',
    'awscdk-construct-medialive-channel',
  ],
  peerDeps: [
    'awscdk-construct-medialive-channel',
  ],
  bundledDeps: [
    '@aws-sdk/client-medialive',
    '@aws-sdk/client-mediapackage',
  ],
  description: 'CDK Construct for setting up a simple live channel for testing',
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
