import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
} from '@nestjs/common';
import { CourseModulesService } from './course-modules.service';
import { CreateCourseModuleDto } from './dto/create-course-module.dto';
import { UpdateCourseModuleDto } from './dto/update-course-module.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CourseModule } from './entities/course-module.entity';

@ApiTags('course-modules')
@Controller('course-modules')
export class CourseModulesController {
  constructor(private readonly courseModulesService: CourseModulesService) {}

  @Version('1')
  @Post()
  @ApiOperation({ summary: 'Create a new course module' })
  @ApiResponse({
    status: 201,
    description: 'Course module successfully created',
  })
  create(@Body() createCourseModuleDto: CreateCourseModuleDto) {
    return this.courseModulesService.create(createCourseModuleDto);
  }

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get all course modules' })
  @ApiResponse({ status: 200, description: 'Retrieved all course modules' })
  async findAll():Promise<CourseModule[]> {
    return this.courseModulesService.findAll();
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: 'Get a course module by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved course module by ID' })
  findOne(@Param('id') id: string) {
    return this.courseModulesService.findOne(id);
  }

  @Version('1')
  @Patch(':id')
  @ApiOperation({ summary: 'Update a course module by ID' })
  @ApiResponse({
    status: 200,
    description: 'Updated course module successfully',
  })
  update(
    @Param('id') id: string,
    @Body() updateCourseModuleDto: UpdateCourseModuleDto,
  ) {
    return this.courseModulesService.update(+id, updateCourseModuleDto);
  }

  @Version('1')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a course module by ID' })
  @ApiResponse({
    status: 200,
    description: 'Deleted course module successfully',
  })
  remove(@Param('id') id: string) {
    return this.courseModulesService.remove(+id);
  }
}
