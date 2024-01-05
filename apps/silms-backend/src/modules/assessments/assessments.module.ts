import { Module } from '@nestjs/common';
import { AssessmentsService } from './assessments.service';
import { AssessmentsController } from './assessments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from '../course-modules/entities/course-module.entity';
import { Submission } from '../submissions/entities/submission.entity';
import { Grade } from '../grades/entities/grade.entity';
import { Assessment } from './entities/assessment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assessment, CourseModule, Submission, Grade])],
  controllers: [AssessmentsController],
  providers: [AssessmentsService],
})
export class AssessmentsModule {}
