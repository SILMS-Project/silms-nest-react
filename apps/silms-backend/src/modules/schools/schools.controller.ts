import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@ApiTags('schools')
@Controller('schools')

export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  // @ApiOperation is added to provide information about the endpoint in Swagger documentation
  // @ApiResponse is added to specify the response status and description

  @Version('1')
  // POST /schools
  @Post()
  @ApiOperation({ summary: 'Create a new school' })
  @ApiResponse({ status: 201, description: 'School successfully created' })
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }

  @Version('1')
  // GET /schools
  @Get()
  @ApiOperation({ summary: 'Get all schools' })
  @ApiResponse({ status: 200, description: 'List of all schools' })
  findAll() {
    return this.schoolsService.findAll();
  }

  @Version('1')
  // GET /schools/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get a school by ID' })
  @ApiResponse({ status: 200, description: 'School found by ID' })
  @ApiResponse({ status: 404, description: 'School not found' })
  findOne(@Param('id') id: string) {
    return this.schoolsService.findOne(id);
  }

  @Version('1')
  // PATCH /schools/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a school by ID' })
  @ApiResponse({ status: 200, description: 'School successfully updated' })
  @ApiResponse({ status: 404, description: 'School not found' })
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolsService.update(+id, updateSchoolDto);
  }

  @Version('1')
  // DELETE /schools/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a school by ID' })
  @ApiResponse({ status: 200, description: 'School successfully deleted' })
  @ApiResponse({ status: 404, description: 'School not found' })
  remove(@Param('id') id: string) {
    return this.schoolsService.remove(+id);
  }
}
