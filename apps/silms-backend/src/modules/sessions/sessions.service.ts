import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  sessionRepository: any;
  //create session function
  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const session = this.sessionRepository.create(createSessionDto);
    const savedSession = await this.sessionRepository.save(session);
    return savedSession;
  }

  findAll() {
    return `This action returns all sessions`;
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

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }

  //get current session
  async getCurrentSession(): Promise<Session> {
    const currentSession = await this.sessionRepository.findOne({
      where: { isCurrentSession: true },
    });

    if (!currentSession) {
      throw new NotFoundException('Current session not found');
    }

    return currentSession;
  }
}
