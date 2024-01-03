import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { Result } from './entities/result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourse } from '../student-courses/entities/student-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Result, StudentCourse])],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
