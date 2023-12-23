import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LecturersService } from './lecturers.service';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';

@ApiTags('lecturers')
@Controller('lecturers')
export class LecturersController {
  constructor(private readonly lecturersService: LecturersService) {}

  // @ApiOperation is added to provide information about the endpoint in Swagger documentation
  // @ApiResponse is added to specify the response status and description

  // POST /lecturers
  @Post()
  @ApiOperation({ summary: 'Create a new lecturer' })
  @ApiResponse({ status: 201, description: 'Lecturer successfully created' })
  create(@Body() createLecturerDto: CreateLecturerDto) {
    return this.lecturersService.create(createLecturerDto);
  }

  // GET /lecturers
  @Get()
  @ApiOperation({ summary: 'Get all lecturers' })
  @ApiResponse({ status: 200, description: 'List of all lecturers' })
  findAll() {
    return this.lecturersService.findAll();
  }

  // GET /lecturers/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get a lecturer by ID' })
  @ApiResponse({ status: 200, description: 'Lecturer found by ID' })
  @ApiResponse({ status: 404, description: 'Lecturer not found' })
  findOne(@Param('id') id: string) {
    return this.lecturersService.findOne(+id);
  }

  // PATCH /lecturers/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a lecturer by ID' })
  @ApiResponse({ status: 200, description: 'Lecturer successfully updated' })
  @ApiResponse({ status: 404, description: 'Lecturer not found' })
  update(@Param('id') id: string, @Body() updateLecturerDto: UpdateLecturerDto) {
    return this.lecturersService.update(+id, updateLecturerDto);
  }

  // DELETE /lecturers/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a lecturer by ID' })
  @ApiResponse({ status: 200, description: 'Lecturer successfully deleted' })
  @ApiResponse({ status: 404, description: 'Lecturer not found' })
  remove(@Param('id') id: string) {
    return this.lecturersService.remove(+id);
  }
}
