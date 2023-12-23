import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StudentCoursesService } from './student-courses.service';
import { CreateStudentCourseDto } from './dto/create-student-course.dto';
import { UpdateStudentCourseDto } from './dto/update-student-course.dto';

@ApiTags('student-courses')
@Controller('student-courses')
export class StudentCoursesController {
  constructor(private readonly studentCoursesService: StudentCoursesService) {}

  // @ApiOperation is added to provide information about the endpoint in Swagger documentation
  // @ApiResponse is added to specify the response status and description

  // POST /student-courses
  @Post()
  @ApiOperation({ summary: 'Create a new student course' })
  @ApiResponse({ status: 201, description: 'Student course successfully created' })
  create(@Body() createStudentCourseDto: CreateStudentCourseDto) {
    return this.studentCoursesService.create(createStudentCourseDto);
  }

  // GET /student-courses
  @Get()
  @ApiOperation({ summary: 'Get all student courses' })
  @ApiResponse({ status: 200, description: 'List of all student courses' })
  findAll() {
    return this.studentCoursesService.findAll();
  }

  // GET /student-courses/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get a student course by ID' })
  @ApiResponse({ status: 200, description: 'Student course found by ID' })
  @ApiResponse({ status: 404, description: 'Student course not found' })
  findOne(@Param('id') id: string) {
    return this.studentCoursesService.findOne(+id);
  }

  // PATCH /student-courses/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a student course by ID' })
  @ApiResponse({ status: 200, description: 'Student course successfully updated' })
  @ApiResponse({ status: 404, description: 'Student course not found' })
  update(@Param('id') id: string, @Body() updateStudentCourseDto: UpdateStudentCourseDto) {
    return this.studentCoursesService.update(+id, updateStudentCourseDto);
  }

  // DELETE /student-courses/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a student course by ID' })
  @ApiResponse({ status: 200, description: 'Student course successfully deleted' })
  @ApiResponse({ status: 404, description: 'Student course not found' })
  remove(@Param('id') id: string) {
    return this.studentCoursesService.remove(+id);
  }
}
