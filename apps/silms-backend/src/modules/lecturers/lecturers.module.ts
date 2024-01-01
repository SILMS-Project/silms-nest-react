import { Module } from '@nestjs/common';
import { LecturersService } from './lecturers.service';
import { LecturersController } from './lecturers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecturer } from './entities/lecturer.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Lecturer]), UsersModule],
  controllers: [LecturersController],
  providers: [LecturersService],
  exports: [LecturersService],
})
export class LecturersModule {}
