import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import IORedis from 'ioredis';

@Injectable()
export class QueueService {
  private connection = new IORedis(
    'rediss://default:AUbNAAIncDIyNjYzNmQ3NTlhYzI0ZmI1YTdhNzNhYTYyYTdjZDBiYnAyMTgxMjU@alert-salmon-18125.upstash.io:6379',
    {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    },
  );

  public reminderQueue = new Queue('reminders', {
    connection: this.connection,
  });

  async addReminderJob(data: { message: string }) {
    return this.reminderQueue.add('sendReminder', data);
  }
}
