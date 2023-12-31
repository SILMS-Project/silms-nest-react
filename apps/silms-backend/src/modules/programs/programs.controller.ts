import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from './entities/program.entity';
import { Course } from '../courses/entities/course.entity';
@ApiTags('programs')
@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  // @ApiOperation is added to provide information about the endpoint in Swagger documentation
  // @ApiResponse is added to specify the response status and description

  @Version('1')
  // POST /programs
  @Post()
  @ApiOperation({ summary: 'Create a new program' })
  @ApiResponse({ status: 201, description: 'Program successfully created' })
  create(@Body() createProgramDto: CreateProgramDto) {
    return this.programsService.create(createProgramDto);
  }

  @Version('1')
  // GET /programs
  @Get()
  @ApiOperation({ summary: 'Get all programs' })
  @ApiResponse({ status: 200, description: 'List of all programs', type: Program, isArray: true })
  async findAll(): Promise<Program[]> {
    return this.programsService.findAll();
  }

  @Version('1')
  // GET /programs/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get a program by ID' })
  @ApiResponse({ status: 200, description: 'Program found by ID' })
  @ApiResponse({ status: 404, description: 'Program not found' })
  findOne(@Param('id') id: string) {
    return this.programsService.findOne(+id);
  }
  @Version('1')
  // GET /programs/courses/:id
  @Get('courses/:id')
  @ApiOperation({ summary: 'Get all courses under a program' })
  @ApiResponse({ status: 200, description: 'List of all courses', type: Course, isArray: true })
  findCoursesByProgram(@Param('id') id:string) {
    return this.programsService.findCoursesByProgram(id);
  }

  @Version('1')
  // PATCH /programs/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a program by ID' })
  @ApiResponse({ status: 200, description: 'Program successfully updated' })
  @ApiResponse({ status: 404, description: 'Program not found' })
  update(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
    return this.programsService.update(+id, updateProgramDto);
  }

  @Version('1')
  // DELETE /programs/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a program by ID' })
  @ApiResponse({ status: 200, description: 'Program successfully deleted' })
  @ApiResponse({ status: 404, description: 'Program not found' })
  remove(@Param('id') id: string) {
    return this.programsService.remove(+id);
  }
}
