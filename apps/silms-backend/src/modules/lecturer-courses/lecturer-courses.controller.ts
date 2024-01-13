import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  UseGuards,
} from '@nestjs/common';
import { LecturerCoursesService } from './lecturer-courses.service';
import { CreateLecturerCourseDto } from './dto/create-lecturer-course.dto';
import { UpdateLecturerCourseDto } from './dto/update-lecturer-course.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/guards/roles.decorator';
import { RolesGuard } from '../auth/guards/roles-auth.guard';

@ApiTags('lecturer-course')
@Controller('lecturer-courses')
export class LecturerCoursesController {
  constructor(
    private readonly lecturerCoursesService: LecturerCoursesService,
  ) {}

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Assign a course to a lecturer' })
  @ApiResponse({
    status: 201,
    description: 'Course assigned to lectuere successfully',
  })
  @Post('create')
  create(@Body() createLecturerCourseDto: CreateLecturerCourseDto) {
    return this.lecturerCoursesService.create(createLecturerCourseDto);
  }

  @Version('1')
  @Roles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Get all lecturer-courses' })
  @ApiResponse({ status: 200, description: 'List of all lecturer-courses' })
  @Get()
  findAll() {
    return this.lecturerCoursesService.findAll();
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get a lecturer-course by ID' })
  @ApiResponse({ status: 200, description: 'Lecturer-course found by ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lecturerCoursesService.findById(id);
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get course(s) taken by a lecturer' })
  @ApiResponse({ status: 200, description: 'List of courses taken by lecturer' })
  @Get('course/:lecturerId')
  async findCoursesByLecturer(@Param('lecturerId') lecturerId: string) {
    return await this.lecturerCoursesService.findCoursesByLecturer(lecturerId);
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get lecturer(s) taking a course' })
  @ApiResponse({ status: 200, description: 'List of lecturers taking a course' })
  @Get('lecturer/:courseId')
  async findLecturersByCourse(@Param('courseId') courseId: string) {
    return this.lecturerCoursesService.findLecturersByCourse(courseId);
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Unassigned lecture from Course' })
  @ApiResponse({
    status: 200,
    description: 'Lecturer unassigned from course successfully',
  })
  @Post('unassigned')
  async unassignLecturerToCourse(
    @Body() createLecturerCourseDto: CreateLecturerCourseDto,
  ) {
    return this.lecturerCoursesService.unassignLectureToCourse(
      createLecturerCourseDto,
    );
  }

  @Version('1')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a lecturer-course by ID' })
  @ApiResponse({
    status: 200,
    description: 'Lecturer-course successfully updated',
  })
  update(
    @Param('id') id: string,
    @Body() updateLecturerCourseDto: UpdateLecturerCourseDto,
  ) {
    return this.lecturerCoursesService.update(id, updateLecturerCourseDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.lecturerCoursesService.remove(id);
  // }
}
