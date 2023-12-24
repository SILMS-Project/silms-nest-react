import { Injectable } from '@nestjs/common';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecturer } from './entities/lecturer.entity';
import { Repository } from 'typeorm';
import { LecturerProps } from './interfaces/lecturer.interface';
import { UsersService } from '../users/services/users.service';

@Injectable()
export class LecturersService {
  constructor (@InjectRepository(Lecturer) private readonly lecturerRepository: Repository<Lecturer>,
    private usersService: UsersService,
  ) {}

  async create(createLecturerDto: CreateLecturerDto) {
    const lecturer = await this.lecturerRepository.findOne({where: {employeeId: createLecturerDto.employeeId}});
    if (lecturer) {
      throw new Error("Lecturer already exists!");
    }

    const newUser = await this.usersService.create(createLecturerDto);

    const lecturerProps: LecturerProps = {
      ...createLecturerDto
    }

    const newLecturer = this.lecturerRepository.create({
      ...lecturerProps,
      profile: newUser.profile
    });

    return this.lecturerRepository.save(newLecturer);
  }

  findAll() {
    return `This action returns all lecturers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturer`;
  }

  update(id: number, updateLecturerDto: UpdateLecturerDto) {
    return `This action updates a #${id} lecturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturer`;
  }
}
