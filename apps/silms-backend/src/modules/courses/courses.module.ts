import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import {  Course } from '@modules/courses/entities/course.entity'; 
@Module({
  imports: [
    TypeOrmModule.forFeature([  Course]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
