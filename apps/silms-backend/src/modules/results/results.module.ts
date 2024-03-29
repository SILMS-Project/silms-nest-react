import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { Result } from './entities/result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCoursesModule } from '../student-courses/student-courses.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Result]), StudentCoursesModule, AuthModule],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
