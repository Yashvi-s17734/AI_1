import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  getTasks() {
    return this.taskservice.getTasks();
  }

  @Post()
  createTask(@Body() body: { title: string }) {
    return this.taskservice.createTask(body.title);
  }
}
