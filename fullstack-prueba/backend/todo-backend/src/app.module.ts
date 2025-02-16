import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module'; // Ensure this path is correct and the file exists
import { Task } from './task/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  // Usa tu usuario de PostgreSQL
      password: 'password',  // Usa tu contraseña de PostgreSQL
      database: 'todo_db',   // Base de datos que usaremos
      entities: [Task],
      synchronize: true,     // No usar en producción
    }),
    TaskModule,
  ],
})
export class AppModule {}
