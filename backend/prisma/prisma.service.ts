// prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  public client: PrismaClient;
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    this.client = new PrismaClient();
  }

  async onModuleInit() {
    this.logger.log('Connecting to MongoDB...');
    await this.client.$connect();
    this.logger.log('MongoDB connected successfully');
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
    this.logger.log('MongoDB disconnected');
  }
}