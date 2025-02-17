import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // Crear una nueva tarea
  @Post()
  create(@Body() task: Task) {
    return this.taskService.create(task);
  }

  // Obtener todas las tareas
  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  // Actualizar una tarea por su ID
  @Put(':id')
  update(@Param('id') id: number, @Body() task: Task) {
    return this.taskService.update(id, task);
  }

  // Eliminar una tarea por su ID
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.remove(id);
  }
}
