import { Module } from '@nestjs/common';
import { AssessmentsService } from './assessments.service';
import { AssessmentsController } from './assessments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assessment } from './entities/assessment.entity';
import { CourseModulesModule } from '../course-modules/course-modules.module';
import { Submission } from '../submissions/entities/submission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Assessment, Submission]),
    CourseModulesModule,
  ],
  controllers: [AssessmentsController],
  providers: [AssessmentsService],
  exports: [AssessmentsService],
})
export class AssessmentsModule {}
