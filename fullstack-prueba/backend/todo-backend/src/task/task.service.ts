import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(id: number, task: Task): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  create(task: Task): Promise<import("./task.entity").Task> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<import("./task.entity").Task[]> {
    throw new Error('Method not implemented.');
  }
  // Add your service methods here
}