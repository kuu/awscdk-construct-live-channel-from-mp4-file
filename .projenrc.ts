import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.148.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
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

  deps: ['aws-cdk-lib', 'constructs'],
  description: 'CDK Construct for setting up a simple live channel for testing',
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
