import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import {  Program } from '@modules/programs/entities/program.entity'; 
import { School } from '../schools/entities/school.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Program,School]),
  ],
  controllers: [ProgramsController],
  providers: [ProgramsService],
})
export class ProgramsModule {}
