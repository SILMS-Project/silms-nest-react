import { Module } from '@nestjs/common';
import { LecturerCoursesService } from './lecturer-courses.service';
import { LecturerCoursesController } from './lecturer-courses.controller';

@Module({
  providers: [LecturerCoursesService],
  controllers: [LecturerCoursesController]
})
export class LecturerCoursesModule {}
