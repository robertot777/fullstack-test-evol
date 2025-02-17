import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Task } from './task/task.entity';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Asegúrate de que estos datos son correctos
      password: 'password',
      database: 'todo_db',
      entities: [Task],  // Asegúrate de que las entidades estén correctas
      synchronize: true,  // Cuidado con esto en producción
    }),
    TaskModule,  // Asegúrate de que TaskModule esté importado
    TypeOrmModule.forFeature([Task]),  // Asegúrate de que la entidad Task esté registrada
  ],
  providers: [TaskService],  // El servicio de tareas
  controllers: [TaskController],  // El controlador de tareas
})
export class AppModule {}


