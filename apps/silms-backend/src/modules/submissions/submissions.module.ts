import { Module } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { SubmissionsController } from './submissions.controller';
import { Assessment } from '../assessments/entities/assessment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from '../grades/entities/grade.entity';
import { Submission } from './entities/submission.entity';
import { Student } from '../students/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assessment, Submission, Grade, Student])],

  controllers: [SubmissionsController],
  providers: [SubmissionsService],
  exports: [SubmissionsService],
})
export class SubmissionsModule {}
