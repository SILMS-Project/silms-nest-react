import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Version } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { LecturersService } from './lecturers.service';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('lecturers')
@Controller('lecturers')
export class LecturersController {
  constructor(private readonly lecturersService: LecturersService) {}

  @Version('1')
  @Post('create')
  @ApiOperation({ summary: 'Create a new lecturer' })
  @ApiResponse({ status: 201, description: 'Lecturer successfully created' })
  create(@Body() createLecturerDto: CreateLecturerDto) {
    return this.lecturersService.create(createLecturerDto);
  }


//   @Version('1')
//   @UseGuards(JwtAuthGuard)
//   @Get()
//   @ApiOperation({ summary: 'Get all lecturers' })
//   @ApiResponse({ status: 200, description: 'List of all lecturers' })
//   findAll() {
//     return this.lecturersService.findAll();
//   }


  @Version('1')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a lecturer by ID' })
  @ApiResponse({ status: 200, description: 'Lecturer found by ID' })
  @ApiResponse({ status: 404, description: 'Lecturer not found' })
  findOne(@Param('id') id: string) {
    return this.lecturersService.findById(id);
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a lecturer by ID' })
  @ApiResponse({ status: 200, description: 'Lecturer successfully updated' })
  @ApiResponse({ status: 404, description: 'Lecturer not found' })
  update(@Param('id') id: string, @Body() updateLecturerDto: UpdateLecturerDto) {
    return this.lecturersService.update(id, updateLecturerDto);
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a lecturer by ID' })
  @ApiResponse({ status: 200, description: 'Lecturer successfully deleted' })
  @ApiResponse({ status: 404, description: 'Lecturer not found' })
  remove(@Param('id') id: string) {
    return this.lecturersService.remove(id);
  }
}
