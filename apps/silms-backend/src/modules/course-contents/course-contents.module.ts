import { Module } from '@nestjs/common';
import { CourseContentsService } from './course-contents.service';
import { CourseContentsController } from './course-contents.controller';
import { CourseContent } from './entities/course-content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModulesModule } from '../course-modules/course-modules.module';

@Module({
  imports: [TypeOrmModule.forFeature([CourseContent]), CourseModulesModule],
  controllers: [CourseContentsController],
  providers: [CourseContentsService],
})
export class CourseContentsModule {}
