import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { QueueService } from './queue.service';
import { NotificationsService } from './notifications.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [QueueService, NotificationsService],
})
export class NotificationsModule {}
