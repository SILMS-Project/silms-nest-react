import { Module } from '@nestjs/common';
import { StudentCoursesService } from './student-courses.service';
import { StudentCoursesController } from './student-courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourse } from './entities/student-course.entity';
import { Student } from '../students/entities/student.entity';
import { Course } from '../courses/entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentCourse, Student, Course]),
  ],
  controllers: [StudentCoursesController],
  providers: [StudentCoursesService],
})
export class StudentCoursesModule {}
