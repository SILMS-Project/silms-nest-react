import { Module } from '@nestjs/common';
import { CourseModulesService } from './course-modules.service';
import { CourseModulesController } from './course-modules.controller';
import { CourseModule } from './entities/course-module.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '../courses/entities/course.entity';
import { CourseContent } from '../course-contents/entities/course-content.entity';
import { Assessment } from '../assessments/entities/assessment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseModule, 
    Course, CourseContent, Assessment
  ])],

  controllers: [CourseModulesController],
  providers: [CourseModulesService],
})
export class CourseModulesModule {}
