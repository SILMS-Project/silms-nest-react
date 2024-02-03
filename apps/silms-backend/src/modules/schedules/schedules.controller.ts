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
  HttpStatus,
  Query,
} from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ApiTags, ApiOperation, ApiResponse  } from '@nestjs/swagger';

@ApiTags('schedules')
@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Version('1')
  @Post('create')
  @ApiOperation({ summary: 'Create a new schedule' })
  @ApiResponse({ status: 201, description: 'Schedule successfully created' })
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto);
  }

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get all schedules' })
  @ApiResponse({
    status: 200,
    description: 'List of all schedules',
    type: Schedule,
    isArray: true,
  })
  findAll() {
    return this.schedulesService.findAll();
  }

  @Version('1')
  @Get('by-program-level')
  @ApiOperation({ summary: 'Get all schedules by program and level' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of schedules by program and level',
    type: Schedule,
    isArray: true,
  })
  async findByProgramAndLevel(
    @Query('programId') programId: string,
    @Query('level') level: string
  ) {
    try {
      const schedules = await this.schedulesService.getAllSchedulesByProgramAndLevel(
        programId,
        parseInt(level, 10)
      );
      return {
        status: HttpStatus.OK,
        message: 'List of schedules by program and level',
        data: schedules,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Failed to fetch schedules by program and level: ${error.message || error}`,
      };
    }
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: 'Get a schedule by ID' })
  @ApiResponse({ status: 200, description: 'Schedule found by ID' })
  @ApiResponse({ status: 404, description: 'Schedule not found' })
  findOne(@Param('id') id: string) {
    return this.schedulesService.findOne(id);
  }

  @Version('1')
  @Patch(':id')
  @ApiOperation({ summary: 'Update a schedule by ID' })
  @ApiResponse({ status: 200, description: 'Schedule successfully updated' })
  @ApiResponse({ status: 404, description: 'Schedule not found' })
  update(
    @Param('id') id: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.schedulesService.update(id, updateScheduleDto);
  }

  @Version('1')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a schedule by ID' })
  @ApiResponse({ status: 200, description: 'Schedule successfully deleted' })
  @ApiResponse({ status: 404, description: 'Schedule not found' })
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(id);
  }
}
