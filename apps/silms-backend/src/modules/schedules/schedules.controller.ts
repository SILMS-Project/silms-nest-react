/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
} from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('schedules')
@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Version('1')
  @Post('create')
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto);
  }

  @Version('1')
  @Get()
  findAll() {
    return this.schedulesService.findAll();
  }

  @Version('1')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schedulesService.findOne(id);
  }

  @Version('1')
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.schedulesService.update(id, updateScheduleDto);
  }

  @Version('1')
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(id);
  }
}
