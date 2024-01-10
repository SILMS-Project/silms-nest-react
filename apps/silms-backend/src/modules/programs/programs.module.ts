import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import { Program } from '@modules/programs/entities/program.entity';
import { School } from '../schools/entities/school.entity';
import { SchoolsService } from '../schools/schools.service';
import { Course } from '../courses/entities/course.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Program, School, Course])],
  controllers: [ProgramsController],
  providers: [ProgramsService, SchoolsService],
  exports: [ProgramsService],
})
export class ProgramsModule {}
