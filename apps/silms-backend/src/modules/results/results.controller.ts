import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  UseGuards,
} from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/guards/roles.decorator';
import { Role } from '@/utils/constants';
import { RolesGuard } from '../auth/guards/roles-auth.guard';


@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Version('1')
  // @Roles([Role.Lecturer])
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Create a result' })
  @ApiResponse({ status: 201, description: 'Created.' })
  @Post('create')
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultsService.create(createResultDto);
  }

  @Version('1')
  @Roles([Role.Lecturer, 'admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Get all results' })
  @ApiResponse({ status: 200, description: 'All results.' })
  @Get()
  findAll() {
    return this.resultsService.findAll();
  }

  @Version('1')
  @Roles([Role.Lecturer, 'admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Get a result by ID' })
  @ApiResponse({ status: 200, description: 'Found result by ID.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultsService.findOne(id);
  }

  @Version('1')
  @Roles([Role.Lecturer, 'admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Update a result by ID' })
  @ApiResponse({ status: 200, description: 'Updated result by ID.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultDto: UpdateResultDto) {
    return this.resultsService.update(id, updateResultDto);
  }

  @Version('1')
  @Roles([Role.Lecturer, 'admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Delete a result by ID' })
  @ApiResponse({ status: 200, description: 'Deleted result by ID.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultsService.remove(id);
  }

  @Version('1')
  @Post('calculate')
  calculate(@Body() body: any) {
    return this.resultsService.calculateTotalScoreAndGrade(body.id);
  }

  @Version('1')
  @Post('calculate-gpa/:id')
  calculateGPA(@Param('id') id: string) {
    return this.resultsService.calculateGPAByStudentId(id);
  }
}
