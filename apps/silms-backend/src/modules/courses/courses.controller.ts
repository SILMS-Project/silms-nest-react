import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // @ApiOperation is added to provide information about the endpoint in Swagger documentation
  // @ApiResponse is added to specify the response status and description

  // POST /courses
  @Post()
  @ApiOperation({ summary: 'Create a new course' })
  @ApiResponse({ status: 201, description: 'Course successfully created' })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  // GET /courses
  @Get()
  @ApiOperation({ summary: 'Get all courses' })
  @ApiResponse({ status: 200, description: 'List of all courses' })
  findAll() {
    return this.coursesService.findAll();
  }

  // GET /courses/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get a course by ID' })
  @ApiResponse({ status: 200, description: 'Course found by ID' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  // PATCH /courses/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a course by ID' })
  @ApiResponse({ status: 200, description: 'Course successfully updated' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  // DELETE /courses/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a course by ID' })
  @ApiResponse({ status: 200, description: 'Course successfully deleted' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
