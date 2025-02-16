import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { SequelizeModule } from '@nestjs/sequelize';



@Module({
  imports: [SequelizeModule.forFeature([TaskModule])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
