import * as crypto from 'crypto';
import {
  MediaLiveClient,
  BatchStopCommand,
  DeleteScheduleCommand,
} from '@aws-sdk/client-medialive';

import {
  MediaPackageClient,
  CreateHarvestJobCommand,
} from '@aws-sdk/client-mediapackage';

const mediaLive = new MediaLiveClient({ region: process.env.REGION });
const mediaPackage = new MediaPackageClient({ region: process.env.REGION });

const CHANNEL_ID = process.env.CHANNEL_ID as string;
const ORIGIN_ENDPOINT_ID = process.env.ORIGIN_ENDPOINT_ID as string;
const START_TIME = process.env.START_TIME as string;
const END_TIME = process.env.END_TIME as string;
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME as string;
const MANIFEST_KEY = process.env.MANIFEST_KEY as string;
const S3_ROLE_ARN = process.env.S3_ROLE_ARN as string;

// Lambda function to insert SCTE-35 splice_insert() message using the MediaLive schedule API
export async function handler() {
  await deleteSchedules();
  await stopChannel();
  await createHarvestJob();
}

function deleteSchedules() {
  const command = new DeleteScheduleCommand({ ChannelId: CHANNEL_ID });
  return mediaLive.send(command);
}

function stopChannel() {
  const command = new BatchStopCommand({ ChannelIds: [CHANNEL_ID] });
  return mediaLive.send(command);
}

function createHarvestJob() {
  const command = new CreateHarvestJobCommand({
    StartTime: START_TIME,
    EndTime: isPast(END_TIME) ? END_TIME : new Date().toISOString(),
    Id: `${crypto.randomUUID()}`,
    OriginEndpointId: ORIGIN_ENDPOINT_ID,
    S3Destination: {
      BucketName: S3_BUCKET_NAME,
      ManifestKey: MANIFEST_KEY,
      RoleArn: S3_ROLE_ARN,
    },
  });
  return mediaPackage.send(command);
}

function isPast(date: string) {
  if (!date) {
    return false;
  }
  return new Date(date) < new Date();
}
