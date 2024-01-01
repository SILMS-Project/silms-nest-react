import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import {  Course } from '@modules/courses/entities/course.entity'; 
import { Program } from '../programs/entities/program.entity';
import { CourseModule } from '../course-modules/entities/course-module.entity';
import { StudentCourse } from '../student-courses/entities/student-course.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Course,Program, CourseModule, StudentCourse]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
