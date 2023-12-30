import { Module } from '@nestjs/common';
import { LecturerCoursesService } from './lecturer-courses.service';
import { LecturerCoursesController } from './lecturer-courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LecturerCourses } from './entities/lecturer-courses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LecturerCourses])],
  controllers: [LecturerCoursesController],
  providers: [LecturerCoursesService],
})
export class LecturerCoursesModule {}
