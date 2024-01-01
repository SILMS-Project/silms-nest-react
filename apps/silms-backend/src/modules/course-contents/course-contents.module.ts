import { Module } from '@nestjs/common';
import { CourseContentsService } from './course-contents.service';
import { CourseContentsController } from './course-contents.controller';
import { CourseContent } from './entities/course-content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from '../course-modules/entities/course-module.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    CourseModule, 
    CourseContent])],
  controllers: [CourseContentsController],
  providers: [CourseContentsService],
})
export class CourseContentsModule {}
