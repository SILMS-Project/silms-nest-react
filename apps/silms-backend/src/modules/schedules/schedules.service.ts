/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { validate } from 'class-validator';


@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,

  ) {}
  

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    const schedule = new Schedule();
    // Map DTO properties to entity properties
    
    schedule.dayOfWeek = createScheduleDto.dayOfWeek;
    schedule.startTime = createScheduleDto.startTime;
    schedule.endTime = createScheduleDto.endTime;
    schedule.room = createScheduleDto.room;

    

  // Validate the DTO
  await validate(createScheduleDto);

  const savedSchedule = await this.scheduleRepository.save(schedule);
  return savedSchedule;
  }
  
  // create(createScheduleDto: CreateScheduleDto) {
  //   return 'This action adds a new schedule';
  // }

  findAll() {
    return `This action returns all schedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
