import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: { name: string; email: string; password: string }) {
  const existing = await this.prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) {
    throw new Error("Email already exists");
  }

  return this.prisma.user.create({ data });
}
 async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

}
