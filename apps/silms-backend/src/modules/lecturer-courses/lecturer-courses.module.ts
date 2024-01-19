import { Module } from '@nestjs/common';
import { LecturerCoursesService } from './lecturer-courses.service';
import { LecturerCoursesController } from './lecturer-courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LecturerCourses } from './entities/lecturer-courses.entity';
import { CoursesModule } from '../courses/courses.module';
import { LecturersModule } from '../lecturers/lecturers.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LecturerCourses],),
    CoursesModule,
    LecturersModule,
    AuthModule,
  ],
  controllers: [LecturerCoursesController],
  providers: [LecturerCoursesService],
})
export class LecturerCoursesModule {}
