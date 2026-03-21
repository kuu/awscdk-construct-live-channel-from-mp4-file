import { LiveFeed, SecretParams } from 'awscdk-construct-mediaconnect-flow';
import { MediaLive, SourceSpec } from 'awscdk-construct-medialive-channel';
import { Construct } from 'constructs';
import { LiveChannelFromMp4, LiveChannelFromMp4Props } from './LiveChannelFromMp4';
import { MediaPackageV1 } from './MediaPackageV1';
import { MediaPackageV2 } from './MediaPackageV2';

export interface LiveChannelWithMediaConnectProps extends LiveChannelFromMp4Props {
  readonly sourceIngestPort?: number; // The ingest port for the SRT-Listener source
  readonly secretParams?: SecretParams; // The secret parameters for the MediaConnect flow source, if applicable.
}

export class LiveChannelWithMediaConnect extends Construct {
  public readonly eml: MediaLive; // The reference to the MediaLive input/channel.
  public readonly empv1?: MediaPackageV1; // The reference to the MediaPackageV1 channel/endpoints.
  public readonly empv2?: MediaPackageV2; // The reference to the MediaPackageV2 channelGroup/channel/endpoints.
  public readonly channelStartTime?: Date; // The start time of the channel.

  constructor(scope: Construct, id: string, props: LiveChannelWithMediaConnectProps) {
    super(scope, id);

    // Create MediaConnect flow(s)
    const flows = Array.from({ length: props.channelClass == 'STANDARD' ? 2 : 1 },
      (_, i) => createMediaConnectFlow(
        this, `MediaConnectFlow${i + 1}`, props.sourceIngestPort ?? (5000 + i), props.secretParams,
      ));

    // Create live channel with MediaConnect sources
    const liveChannel = new LiveChannelFromMp4(scope, 'LiveChannelFromMp4', {
      ...props,
      source: flows.map(({ flow }) => ({ url: flow.attrFlowArn, type: 'MEDIACONNECT' })) as SourceSpec[],
      secret: props.secretParams?.secret,
    });
    this.eml = liveChannel.eml;
    this.empv1 = liveChannel.empv1;
    this.empv2 = liveChannel.empv2;
    this.channelStartTime = liveChannel.channelStartTime;
  }
}

function createMediaConnectFlow(scope: Construct, id: string, sourceIngestPort: number, secretParams?: SecretParams): LiveFeed {
  return new LiveFeed(scope, id, {
    source: {
      protocol: 'SRT',
      type: 'STANDARD-SOURCE',
    },
    sourceIngestPort,
    secretParams,
  });
}
