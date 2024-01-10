/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { CoursesService } from '../courses/courses.service';
import { SessionsService } from '../sessions/sessions.service';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
    private sessionsService: SessionsService,
    private coursesService: CoursesService,

  ) {}
  

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {

    const {courseId, ...scheduleProps} = createScheduleDto;

    const createdSchedule = await this.scheduleRepository.create(scheduleProps)

    // Handle the relationship with Course (assuming it's included in the DTO)
    const course = await this.coursesService.findById(courseId);

    if (!course) {
      throw new NotFoundException(`Course with ID ${createScheduleDto.courseId} not found`);
    }

    createdSchedule.course = course;

    const currentSession = await this.sessionsService.getCurrentSession();

    if (!currentSession) {
      throw new NotFoundException(`No session is currently active`);
    }

    createdSchedule.session = currentSession;


    // Save the schedule to the database
    const savedSchedule = await this.scheduleRepository.save(createdSchedule);
    return savedSchedule;
  }


  findAll(): Promise<Schedule[]> {
    return this.scheduleRepository.find();
  }

  // function to find a schedule by its id
  async findOne(id: string): Promise<Schedule> {
    const schedule = await this.scheduleRepository.findOne({ where: { id } });

    if (!schedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    return schedule;
  }
  
  async update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<Schedule> {
    const schedule = await this.scheduleRepository.findOne({ where: { id } });
  
    if (!schedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  
    // Directly update properties from the DTO
    Object.assign(schedule, updateScheduleDto);
  
    // Only fetch course if courseId is provided in the DTO
    if (updateScheduleDto.courseId) {
      const course = await this.coursesService.findById(updateScheduleDto.courseId);
      if (!course) {
        throw new NotFoundException(`Course with ID ${updateScheduleDto.courseId} not found`);
      }
      schedule.course = course;
    }
  
    // Save the updated schedule
    return this.scheduleRepository.save(schedule);
  }
  
  async remove(id: string): Promise<void> {
    const schedule = await this.scheduleRepository.findOne({ where: { id } });

    if (!schedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    await this.scheduleRepository.delete(schedule);
  }
}
