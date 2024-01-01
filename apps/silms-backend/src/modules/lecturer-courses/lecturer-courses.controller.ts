import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { LecturerCoursesService } from './lecturer-courses.service';
import { CreateLecturerCourseDto } from './dto/create-lecturer-course.dto';
import { UpdateLecturerCourseDto } from './dto/update-lecturer-course.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('lecturer-course')
@Controller('lecturer-courses')
export class LecturerCoursesController {
  constructor(private readonly lecturerCoursesService: LecturerCoursesService) {}

  @Version('1')
  @ApiOperation({ summary: 'Assign a course to a lecturer' })
  @ApiResponse({ status: 201, description: 'Course assigned to lectuere successfully' })
  @Post('create')
  create(@Body() createLecturerCourseDto: CreateLecturerCourseDto) {
    return this.lecturerCoursesService.create(createLecturerCourseDto);
  }

  @Version('1')
  @Get()
  findAll() {
    return this.lecturerCoursesService.findAll();
  }

  @Version('1')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lecturerCoursesService.findById(id);
  }

  @Version('1')
  @ApiOperation({ summary: 'Get course(s) taken by a lecturer' })
  @Get('course/:lecturerId')
  async findCoursesByLecturer(@Param('lecturerId') lecturerId: string) {
    return await this.lecturerCoursesService.findCoursesByLecturer(lecturerId);
  }

  @Version('1')
  @ApiOperation({ summary: 'Get lecturer(s) taking a course' })
  @Get('lecturer/:courseId')
  async findLecturersByCourse(@Param('courseId') courseId: string) {
    return this.lecturerCoursesService.findLecturersByCourse(courseId);
  }

  @Version('1')
  @ApiOperation({ summary: 'Unassigned lecture from Course' })
  @Post('unassigned')
  async unassignLecturerToCourse(@Body() createLecturerCourseDto: CreateLecturerCourseDto) {
    return this.lecturerCoursesService.unassignLectureToCourse(createLecturerCourseDto);
  }

  @Version('1')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecturerCourseDto: UpdateLecturerCourseDto) {
    return this.lecturerCoursesService.update(id, updateLecturerCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturerCoursesService.remove(id);
  }
}
