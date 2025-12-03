import { Worker } from 'bullmq';
import IORedis from 'ioredis';

// Upstash Redis connection
const connection = new IORedis(
   "rediss://default:AUbNAAIncDIyNjYzNmQ3NTlhYzI0ZmI1YTdhNzNhYTYyYTdjZDBiYnAyMTgxMjU@alert-salmon-18125.upstash.io:6379",
  {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  },
);

// Worker
const worker = new Worker(
  'reminders',
  async (job) => {
    console.log('🔔 Reminder received by worker:', job.data.message);
  },
  { connection },
);

// Logs
worker.on('completed', (job) => {
  console.log('✅ Job completed:', job?.id);
});

worker.on('failed', (job, err) => {
  console.log('❌ Job failed:', job?.id, err);
});
