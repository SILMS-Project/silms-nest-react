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
  HttpException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // @ApiOperation is added to provide information about the endpoint in Swagger documentation
  // @ApiResponse is added to specify the response status and description

  @Version('1')
  // POST /courses
  @Post('create')
  @ApiOperation({ summary: 'Create a new course' })
  @ApiResponse({ status: 201, description: 'Course successfully created' })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Version('1')
  // GET /courses
  @Get()
  @ApiOperation({ summary: 'Get all courses' })
  @ApiResponse({
    status: 200,
    description: 'List of all courses',
    type: Course,
    isArray: true,
  })
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Version('1')
  // GET /courses/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get a course by ID' })
  @ApiResponse({ status: 200, description: 'Course found by ID' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  findOne(@Param('id') id: string) {
    return this.coursesService.findById(id);
  }
  @Version('1')
  // GET courses/program/id/:id
  @Get('program/id/:id')
  @ApiOperation({ summary: 'Get all courses under a program' })
  @ApiResponse({
    status: 200,
    description: 'List of all courses',
    type: Course,
    isArray: true,
  })
  findCoursesByProgram(@Param('id') id: string) {
    return this.coursesService.findCourseByProgram(id);
  }

  @Version('1')
  // GET courses/level/:lvl
  @Get('level/:lvl')
  @ApiOperation({ summary: 'Get all courses at specific a level' })
  @ApiResponse({
    status: 200,
    description: 'List of all courses ',
    type: Course,
    isArray: true,
  })
  findCoursesByLevel(@Param('lvl') level: number) {
    return this.coursesService.findCourseByLevel(level);
  }

  @Version('1')
  // GET courses/program/level
  @Get('program/level')
  @ApiOperation({
    summary: 'Get all courses at a specific level within a program',
  })
  @ApiResponse({
    status: 200,
    description: 'List of all courses',
    type: Course,
    isArray: true,
  })
  findCoursesByLevelProgram(
    @Body() requestBody: { programId: string; level: number },
  ) {
    const { programId, level } = requestBody;
    return this.coursesService.findCourseByLevelProgram(programId, level);
  }

  @Version('1')
  // GET courses/program/level/semester
  @Get('program/level/semester')
  @ApiOperation({
    summary:
      'Get all courses at a specific level and semester within a program',
  })
  @ApiResponse({
    status: 200,
    description: 'List of all courses',
    type: Course,
    isArray: true,
  })
  findCoursesByLevelProgramSemester(
    @Body() requestBody: { programId: string; level: number; semester: number },
  ) {
    const { programId, level, semester } = requestBody;
    return this.coursesService.findCourseByLevelProgramSemester(
      programId,
      level,
      semester,
    );
  }

  @Version('1')
  @Get('code/:code')
  @ApiOperation({ summary: 'Get a course by course code' })
  @ApiResponse({
    status: 200,
    description: 'Course found by course code',
    type: Course,
  })
  @ApiResponse({ status: 404, description: 'Course not found' })
  async findByCode(
    @Param('code') code: string,
  ): Promise<{ course: Course; status: number }> {
    try {
      const course = await this.coursesService.findByCode(code);
      return { course, status: HttpStatus.OK };
    } catch (error) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
  }

  @Version('1')
  // PATCH /courses/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a course by ID' })
  @ApiResponse({ status: 200, description: 'Course successfully updated' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Version('1')
  // DELETE /courses/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a course by ID' })
  @ApiResponse({ status: 200, description: 'Course successfully deleted' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
