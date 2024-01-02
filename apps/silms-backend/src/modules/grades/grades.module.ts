import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { Assessment } from '../assessments/entities/assessment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Submission } from '../submissions/entities/submission.entity';
import { Grade } from './entities/grade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Assessment, Submission, 
    Grade])],

  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}