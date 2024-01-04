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
  //get session endpoint
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const session = await this.sessionsService.findById(id);
      return { session, status: HttpStatus.OK };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionsService.update(+id, updateSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionsService.remove(+id);
  }
}
