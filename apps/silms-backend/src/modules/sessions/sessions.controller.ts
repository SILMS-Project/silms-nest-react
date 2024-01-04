import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, NotFoundException, HttpException } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  // @Post()
  // create(@Body() createSessionDto: CreateSessionDto) {
  //   return this.sessionsService.create(createSessionDto);
  // }
  //post session endpoint
  @Post()
  async create(@Body() createSessionDto: CreateSessionDto) {
    try {
      const session = await this.sessionsService.create(createSessionDto);
      return { session, status: HttpStatus.CREATED };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sessionsService.findOne(+id);
  // }

  //get session by id endpoint
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const session = await this.sessionsService.findById(id);
      return { session, status: HttpStatus.OK };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // get current session endpoint
  @Get('current')
  async getCurrentSession() {
    try {
      const currentSession = await this.sessionsService.getCurrentSession();
      return {
        status: HttpStatus.OK,
        message: 'Current session found',
        data: currentSession,
      };
    } catch (error) {
      throw new HttpException(
        `Failed to get current session: ${error.message || error}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    try {
      const updatedSession = await this.sessionsService.update(id, updateSessionDto);
      return {
        status: HttpStatus.OK,
        message: `Session with ID ${id} updated successfully`,
        data: updatedSession,
      };
    } catch (error) {
      throw new HttpException(
        `Failed to update session: ${error.message || error}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //endpoint for updating status session
  @Patch(':id/update-status')
  async updateStatus(@Param('id') id: string, @Body('status') status: boolean) {
    try {
      const updatedSession = await this.sessionsService.updateStatus(id, status);
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionsService.remove(+id);
  }
}
