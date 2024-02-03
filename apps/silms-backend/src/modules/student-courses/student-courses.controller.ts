import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
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

  @Version('1')
  // POST /student-courses
  @Post()
  @ApiOperation({ summary: 'Create a new student course' })
  @ApiResponse({
    status: 201,
    description: 'Student course successfully created',
  })
  async create(
    @Body() createStudentCourseDto: CreateStudentCourseDto,
    @Res() res: any,
  ) {
    try {
      const createdStudentCourse = await this.studentCoursesService.create(
        createStudentCourseDto,
      );
      return res.status(HttpStatus.CREATED).json(createdStudentCourse);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Version('1')
  // GET /student-courses
  @Get()
  @ApiOperation({ summary: 'Get all student courses' })
  @ApiResponse({ status: 200, description: 'List of all student courses' })
  findAll() {
    return this.studentCoursesService.findAll();
  }

  @Version('1')
  // GET /student-courses/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get a student course by ID' })
  @ApiResponse({ status: 200, description: 'Student course found by ID' })
  @ApiResponse({ status: 404, description: 'Student course not found' })
  findOne(@Param('id') id: string) {
    return this.studentCoursesService.find(id);
  }

  @Version('1')
  // GET /student-courses/:id
  @Get('student/:id')
  @ApiOperation({ summary: 'Get a student course by  StudentID' })
  @ApiResponse({ status: 200, description: 'Student course found by  StudentID' })
  @ApiResponse({ status: 404, description: 'Student course not found' })
  findOneByStudentId(@Param('id') id: string) {
    return this.studentCoursesService.findByStudentId(id);
  }

  @Version('1')
  // PATCH /student-courses/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a student course by ID' })
  @ApiResponse({
    status: 200,
    description: 'Student course successfully updated',
  })
  @ApiResponse({ status: 404, description: 'Student course not found' })
  update(
    @Param('id') id: string,
    @Body() updateStudentCourseDto: UpdateStudentCourseDto,
  ) {
    return this.studentCoursesService.update(+id, updateStudentCourseDto);
  }

  @Version('1')
  // DELETE /student-courses/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a student course by ID' })
  @ApiResponse({
    status: 200,
    description: 'Student course successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Student course not found' })
  async remove(@Param('id') id: string, @Res() res: any) {
    try {
      const deletedStudentCourse = await this.studentCoursesService.remove(id);
      if (!deletedStudentCourse) {
        throw new HttpException(
          `Student course with ID ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return res.status(HttpStatus.OK).json(deletedStudentCourse);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
