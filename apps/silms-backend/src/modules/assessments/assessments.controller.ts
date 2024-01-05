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
import { AssessmentsService } from './assessments.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Assessment } from './entities/assessment.entity';

@ApiTags('assessments')
@Controller('assessments')
export class AssessmentsController {
  constructor(private readonly assessmentsService: AssessmentsService) {}

  @Version('1')
  @Post()
  @ApiOperation({ summary: 'Create a new assessment' })
  @ApiResponse({ status: 201, description: 'Assessment successfully created' })
  create(@Body() createAssessmentDto: CreateAssessmentDto) {
    return this.assessmentsService.create(createAssessmentDto);
  }

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get all assessments' })
  @ApiResponse({ status: 200, description: 'Retrieved all assessments' })
  async findAll(): Promise<Assessment[]> {
    return this.assessmentsService.findAll();
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: 'Get an assessment by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved assessment by ID' })
  findOne(@Param('id') id: string) {
    return this.assessmentsService.findOne(id);
  }

  @Version('1')
  @Patch(':id')
  @ApiOperation({ summary: 'Update an assessment by ID' })
  @ApiResponse({ status: 200, description: 'Updated assessment successfully' })
  update(
    @Param('id') id: string,
    @Body() updateAssessmentDto: UpdateAssessmentDto,
  ) {
    return this.assessmentsService.update(+id, updateAssessmentDto);
  }

  @Version('1')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an assessment by ID' })
  @ApiResponse({ status: 200, description: 'Deleted assessment successfully' })
  remove(@Param('id') id: string) {
    return this.assessmentsService.remove(+id);
  }
}
