import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import {  Course } from '@modules/courses/entities/course.entity'; 
import { Program } from '../programs/entities/program.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Course, Program]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService]
})
export class CoursesModule {}
