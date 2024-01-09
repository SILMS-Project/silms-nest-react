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
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('sessions')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  // @Post()
  // create(@Body() createSessionDto: CreateSessionDto) {
  //   return this.sessionsService.create(createSessionDto);
  // }
  //post session endpoint
  @Version('1')
  @Post('create')
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Version('1')
  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sessionsService.findOne(+id);
  // }

  //get session by id endpoint
  @Version('1')
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
  @Version('1')
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

  @Version('1')
  @Patch(':id')
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
      throw new HttpException(
        `Failed to update session: ${error.message || error}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //endpoint for updating status session
  @Version('1')
  @Patch(':id/update-status')
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
  remove(@Param('id') id: string) {
    return this.sessionsService.remove(+id);
  }
}
