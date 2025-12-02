import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getTasks() {
    return this.prisma.task.findMany();
  }

  async createTask(title: string, userId: string) {
    return this.prisma.task.create({
      data: {
        title,
        userId,
      },
    });
  }

  async updateTask(id: string, data: any) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async deleteTask(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
