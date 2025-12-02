import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    this.logger.log('Connecting to MongoDB...');
    await this.$connect();
    this.logger.log('MongoDB connected successfully');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('MongoDB disconnected');
  }
}
