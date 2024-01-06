import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Version,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Version('1')
  @Post('create')
  @ApiOperation({ summary: 'Create a new student' })
  @ApiResponse({ status: 201, description: 'Student successfully created' })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all students' })
  @ApiResponse({ status: 200, description: 'List of all students' })
  findAll() {
    return this.studentsService.findAll();
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a student by ID' })
  @ApiResponse({ status: 200, description: 'Student found by ID' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a student by ID' })
  @ApiResponse({ status: 200, description: 'Student successfully updated' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a student by ID' })
  @ApiResponse({ status: 200, description: 'Student successfully deleted' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
