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
import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('grades')
@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Version('1')
  @Post()
  @ApiOperation({ summary: 'Create a new grade' })
  @ApiResponse({ status: 201, description: 'Grade successfully created' })
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradesService.create(createGradeDto);
  }

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get all grades' })
  @ApiResponse({ status: 200, description: 'Retrieved all grades' })
  findAll() {
    return this.gradesService.findAll();
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: 'Get a grade by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved grade by ID' })
  findOne(@Param('id') id: string) {
    return this.gradesService.findOne(+id);
  }

  @Version('1')
  @Patch(':id')
  @ApiOperation({ summary: 'Update a grade by ID' })
  @ApiResponse({ status: 200, description: 'Updated grade successfully' })
  update(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto) {
    return this.gradesService.update(+id, updateGradeDto);
  }

  @Version('1')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a grade by ID' })
  @ApiResponse({ status: 200, description: 'Deleted grade successfully' })
  remove(@Param('id') id: string) {
    return this.gradesService.remove(+id);
  }
}
