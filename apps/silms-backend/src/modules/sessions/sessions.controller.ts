import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  NotFoundException,
  HttpException,
  Version,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import HttpStatusCodes from '@/configurations/HttpStatusCodes';

@ApiTags('sessions')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Version('1')
  @Get('current')
  @ApiOperation({ summary: 'Get the current session' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Current session found',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Current session not found',
  })
  async getCurrentSession() {
    try {
      const currentSession = await this.sessionsService.getCurrentSession();
      return {
        status: HttpStatus.OK,
        message: 'Current session found',
        data: currentSession,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(
          `Current session not found`,
          HttpStatus.NOT_FOUND,
        );
      } else {
        throw new HttpException(
          `Failed to get current session: ${error.message || error}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Version('1')
  @Post('create')
  @ApiOperation({ summary: 'Create a new session' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Session successfully created',
  })
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get all sessions' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of all sessions',
    type: CreateSessionDto,
    isArray: true,
  })
  findAll() {
    return this.sessionsService.findAll();
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: 'Get a session by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Session found by ID',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Session not found',
  })
  async findOne(@Param('id') id: string) {
    try {
      const session = await this.sessionsService.findById(id);
      return { session, status: HttpStatusCodes.OK };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Version('1')
  @Patch(':id')
  @ApiOperation({ summary: 'Update a session by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Session successfully updated',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Session not found',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input for update',
  })
  async update(
    @Param('id') id: string,
    @Body() updateSessionDto: UpdateSessionDto,
  ) {
    try {
      const updatedSession = await this.sessionsService.update(
        id,
        updateSessionDto,
      );
      return {
        status: HttpStatus.OK,
        message: `Session with ID ${id} updated successfully`,
        data: updatedSession,
      };
    } catch (error) {
      if (error instanceof NotFoundException)
        throw new HttpException(
          `Session with ID ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      if (error instanceof BadRequestException)
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      throw new HttpException(
        `Failed to update session: ${error.message || error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // async update(
  //   @Param('id') id: string,
  //   @Body() updateSessionDto: UpdateSessionDto,
  // ) {
  //   try {
  //     const updatedSession = await this.sessionsService.update(
  //       id,
  //       updateSessionDto,
  //     );
  //     return {
  //       status: HttpStatus.OK,
  //       message: `Session with ID ${id} updated successfully`,
  //       data: updatedSession,
  //     };
  //   } catch (error) {
  //     throw new HttpException(
  //       `Failed to update session: ${error.message || error}`,
  //       HttpStatus.NOT_FOUND,
  //     );
  //   }
  // }

  @Version('1')
  @Patch(':id/update-status')
  @ApiOperation({ summary: 'Update the status of a session' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Session status updated successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Session not found',
  })
  async updateStatus(@Param('id') id: string, @Body('status') status: boolean) {
    try {
      const updatedSession = await this.sessionsService.updateStatus(
        id,
        status,
      );
      return {
        status: HttpStatus.OK,
        message: `Session status updated successfully`,
        data: updatedSession,
      };
    } catch (error) {
      throw new HttpException(
        `Failed to update session status: ${error.message || error}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Version('1')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a session by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Session successfully deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Session not found',
  })
  remove(@Param('id') id: string) {
    return this.sessionsService.remove(+id);
  }
}
