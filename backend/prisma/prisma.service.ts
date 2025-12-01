import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  constructor() {
    super({
      adapter: {
        provider: 'mongodb',
        url: process.env.DATABASE_URL!,
      },
    });
  }
}
