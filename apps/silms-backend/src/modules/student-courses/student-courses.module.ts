import { Module } from '@nestjs/common';
import { StudentCoursesService } from './student-courses.service';
import { StudentCoursesController } from './student-courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourse } from './entities/student-course.entity';
import { Student } from '../students/entities/student.entity';
import { Course } from '../courses/entities/course.entity';
import { Result } from '../results/entities/result.entity';
import { CoursesModule } from '../courses/courses.module';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [TypeOrmModule.forFeature([StudentCourse, Student, Course, Result]), CoursesModule, StudentsModule],
  controllers: [StudentCoursesController],
  providers: [StudentCoursesService],
  exports: [StudentCoursesService],
})
export class StudentCoursesModule {}
