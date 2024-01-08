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
import { SubmissionsService } from './submissions.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('submissions')
@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Version('1')
  @Post('create')
  @ApiOperation({ summary: 'Create a new submission' })
  @ApiResponse({ status: 201, description: 'Submission successfully created' })
  create(@Body() createSubmissionDto: CreateSubmissionDto) {
    return this.submissionsService.create(createSubmissionDto);
  }

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get all submissions' })
  @ApiResponse({ status: 200, description: 'Retrieved all submissions' })
  findAll() {
    return this.submissionsService.findAll();
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: 'Get a submission by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved submission by ID' })
  findOne(@Param('id') id: string) {
    return this.submissionsService.findOne(id);
  }
  
  @Version('1')
  @Get('student/:studentId')
  @ApiOperation({ summary: 'Get all submissions for a student by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved all submissions for the student' })
  findAllSubmissionsForStudent(@Param('studentId') studentId: string) {
    try {
      const submissions =this.submissionsService.findAllStudentSubmissions(studentId);
      return submissions;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get('status/:submissionId')
  @ApiOperation({ summary: 'Get submission status by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved submission status' })
  async getSubmissionStatus(@Param('submissionId') submissionId: string): Promise<string> {
    try {
      const status = await this.submissionsService.getSubmissionStatus(submissionId);
      return status;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Version('1')
  @Patch(':id')
  @ApiOperation({ summary: 'Update a submission by ID' })
  @ApiResponse({ status: 200, description: 'Updated submission successfully' })
  update(
    @Param('id') id: string,
    @Body() updateSubmissionDto: UpdateSubmissionDto,
  ) {
    return this.submissionsService.update(id, updateSubmissionDto);
  }

  @Get('assessment/:id/students')
  @ApiOperation({ summary: 'Get all students profiles and grades from an assessment' })
  @ApiResponse({ status: 200, description: 'Retrieved all students profiles and grades' })
  async getAllStudentsProfilesAndGrades(
    @Param('id') id: string) {
    try {
      const result = await this.submissionsService.getAllStudentsProfilesAndGrades(id);
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
}

  @Version('1')
  @Get('assessment/:id')
  @ApiOperation({ summary: 'Get all submissions by assessment ID' })
  @ApiResponse({
    status: 200,
    description: 'Retrieved submissions by assessment ID',
  })
  findByAssessmentId(@Param('id') id: string) {
    return this.submissionsService.findByAssessmentId(id);
  }

  @Version('1')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a submission by ID' })
  @ApiResponse({ status: 200, description: 'Deleted submission successfully' })
  remove(@Param('id') id: string) {
    return this.submissionsService.remove(id);
  }
}
