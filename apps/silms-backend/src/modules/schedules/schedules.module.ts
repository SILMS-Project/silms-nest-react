import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { CoursesModule } from '../courses/courses.module';
import { SessionsModule } from '../sessions/sessions.module';
import { SessionsService } from '../sessions/sessions.service';
import { Session } from '../sessions/entities/session.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Schedule, Session]),
    SessionsModule,
    CoursesModule,
  ],
  controllers: [SchedulesController],
  providers: [SchedulesService, SessionsService],
})
export class SchedulesModule {}
