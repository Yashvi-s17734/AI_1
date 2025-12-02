import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getTasks();
  }

  @Post()
  create(@Body() body: { title: string; userId: string }) {
    return this.tasksService.createTask(body.title, body.userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.tasksService.updateTask(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
}
