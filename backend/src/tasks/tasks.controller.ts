import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  getTasks() {
    return this.taskservice.getTasks();
  }

  @Post()
  createTask(@Body() body: { title: string; userId: string }) {
    return this.taskservice.createTask(body.title, body.userId);
  }
  
  @Put(':id')
  updateTask(@Param('id') id: string, @Body() body: any) {
    return this.taskservice.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskservice.deleteTask(id);
  }
}
