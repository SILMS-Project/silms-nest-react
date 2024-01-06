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
  constructor(
    @InjectRepository(Lecturer)
    private readonly lecturerRepository: Repository<Lecturer>,
    private usersService: UsersService,
  ) {}

  async create(createLecturerDto: CreateLecturerDto) {
    const lecturer = await this.findByEmployeeId(createLecturerDto.employeeId);
    if (lecturer) {
      throw new Error('Lecturer already exists!');
    }

    const newUser = await this.usersService.create(createLecturerDto);

    const lecturerProps: LecturerProps = {
      ...createLecturerDto,
    };

    const newLecturer = this.lecturerRepository.create({
      ...lecturerProps,
      profile: newUser.profile,
    });

    return this.lecturerRepository.save(newLecturer);
  }

  async findAll() {
    return await this.lecturerRepository.find();
  }

  async findByEmployeeId(employeeId: string) {
    return await this.lecturerRepository.findOne({ where: { employeeId } });
  }

  async findById(id: string) {
    const lecturer = await this.lecturerRepository.findOne({ where: { id } });
    if (!lecturer) {
      throw new Error('Lecturer not found.');
    }

    return lecturer;
  }

  async update(id: string, updateLecturerDto: UpdateLecturerDto) {
    const lecturer = await this.findById(id);
    return await this.lecturerRepository
      .update(lecturer.id, updateLecturerDto)
      .then(() => {
        return 'Lecturer updated successfully.';
      });
  }

  async remove(id: string) {
    const lecturer = await this.findById(id);
    return await this.lecturerRepository.delete(lecturer).then(() => {
      return 'Lecturer deleted successfully.';
    });
  }
}
