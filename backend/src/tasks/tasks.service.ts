import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  getTasks() {
    return this.prisma.task.findMany();
  }

  createTask(title: string, userId: string) {
    return this.prisma.task.create({
      data: {
        title,
        userId,
      },
    });
  }

  updateTask(id: string, data: any) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  deleteTask(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
