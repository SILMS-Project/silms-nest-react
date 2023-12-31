import { Module } from '@nestjs/common';
import { LecturerCoursesService } from './lecturer-courses.service';
import { LecturerCoursesController } from './lecturer-courses.controller';

@Module({
  controllers: [LecturerCoursesController],
  providers: [LecturerCoursesService],
})
export class LecturerCoursesModule {}
