import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];   // ← give type to tasks

  getTasks() {
    return this.tasks;
  }

  createTask(title: string) {
    const newTask: Task = { 
      id: Date.now(), 
      title: title     // ← use the variable, not String
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
