import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { QueueService } from './queue.service';

@Injectable()
export class NotificationsService {
  constructor(private queueService: QueueService) {}

  // runs every 20 seconds
  @Cron('*/20 * * * * *')
  async sendCronReminder() {
    console.log("📅 Cron running... adding reminder to queue");

    await this.queueService.addReminderJob({
      message: "This is your reminder!"
    });
  }
}
