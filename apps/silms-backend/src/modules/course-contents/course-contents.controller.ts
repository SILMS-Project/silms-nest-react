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
} from '@nestjs/common';
import { CourseContentsService } from './course-contents.service';
import { CreateCourseContentDto } from './dto/create-course-content.dto';
import { UpdateCourseContentDto } from './dto/update-course-content.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('course-contents')
@Controller('course-contents')
export class CourseContentsController {
  constructor(private readonly courseContentsService: CourseContentsService) {}

  @Version('1')
  @Post()
  @ApiOperation({ summary: 'Create a new course content' })
  @ApiResponse({
    status: 201,
    description: 'Course content successfully created',
  })
  create(@Body() createCourseContentDto: CreateCourseContentDto) {
    return this.courseContentsService.create(createCourseContentDto);
  }

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get all course contents' })
  @ApiResponse({ status: 200, description: 'Retrieved all course contents' })
  findAll() {
    return this.courseContentsService.findAll();
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: 'Get a course content by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved course content by ID' })
  findOne(@Param('id') id: string) {
    return this.courseContentsService.findOne(+id);
  }

  @Version('1')
  @Get('module/:moduleId')
  @ApiOperation({ summary: 'Get all course contents for a course module' })
  @ApiResponse({
    status: 200,
    description: 'Retrieved all course contents for the module',
  })
  async findAllByModule(@Param('moduleId') moduleId: string) {
    try {
      const contents =
        await this.courseContentsService.findAllByModule(moduleId);
      return { contents };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Version('1')
  @Patch(':id')
  @ApiOperation({ summary: 'Update a course content by ID' })
  @ApiResponse({
    status: 200,
    description: 'Updated course content successfully',
  })
  update(
    @Param('id') id: string,
    @Body() updateCourseContentDto: UpdateCourseContentDto,
  ) {
    return this.courseContentsService.update(+id, updateCourseContentDto);
  }

  @Version('1')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a course content by ID' })
  @ApiResponse({
    status: 200,
    description: 'Deleted course content successfully',
  })
  remove(@Param('id') id: string) {
    return this.courseContentsService.remove(+id);
  }
}
