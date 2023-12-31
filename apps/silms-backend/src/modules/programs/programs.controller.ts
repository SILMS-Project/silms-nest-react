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
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

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
  @ApiResponse({ status: 200, description: 'List of all programs' })
  findAll() {
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
  // GET /programs/schools/:schoolId/programs
  @Get('schools/:schoolId/programs')
  @ApiOperation({ summary: 'Get programs by school ID' })
  @ApiResponse({ status: 200, description: 'Programs found by school ID' })
  @ApiResponse({ status: 404, description: 'Programs not found' })
  async getAllProgramsBySchool(@Param('schoolId') schoolId: string, @Res() res: any) {
    try {
      const programs = await this.programsService.getAllProgramsBySchool(schoolId);
      return res.status(HttpStatus.OK).json({ programs });
    } catch (error) {
      throw new HttpException('Programs not found', HttpStatus.NOT_FOUND);
    }
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
