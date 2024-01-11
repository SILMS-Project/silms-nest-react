import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  //create session function
  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const session = this.sessionRepository.create(createSessionDto);
    const savedSession = await this.sessionRepository.save(session);
    return savedSession;
  }

  async findAll(): Promise<Session[]> {
    const courses = await this.sessionRepository.find();
    return courses;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  //get session by id
  async findById(id: string): Promise<Session> {
    const session = await this.sessionRepository.findOne({ where: { id } });

    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }

    return session;
  }

  //get current session
  async getCurrentSession(): Promise<Session> {
    const currentSession = await this.sessionRepository.findOne({
      where: { isCurrentSession: true },
    });

    if (!currentSession) {
      throw new NotFoundException('No current session');
    }

    return currentSession;
  }

  //update session
  async update(
    id: string,
    updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    const session = await this.sessionRepository.findOne({ where: { id } });

    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }

    Object.assign(session, updateSessionDto);

    const updatedSession = await this.sessionRepository.save(session);

    return updatedSession;
    
  }

  //update session status: if the status is set to true for a session, all other sessions should be set to false, meaning they are not the current
  async updateStatus(id: string, status: boolean): Promise<Session> {
    if (status) {
      // If the status is set to true, update all other sessions to false
      await this.sessionRepository.update(
        { isCurrentSession: true },
        { isCurrentSession: false },
      );
    }

    const session = await this.sessionRepository.findOne({ where: { id } });

    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }

    session.isCurrentSession = status;

    const updatedSession = await this.sessionRepository.save(session);

    return updatedSession;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
