/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Program } from '@modules/programs/entities/program.entity';
import { Repository } from 'typeorm';
import { School } from '../schools/entities/school.entity';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
  ) {}

  async create(createProgramDto: CreateProgramDto) {
    try {
      const program = await this.programRepository.save(createProgramDto);
      const school = await this.schoolRepository.findOne({
        where: { id: createProgramDto.schoolId },
      });
      if (!school) {
        throw new Error(
          `school with id ${createProgramDto.schoolId} not found`,
        );
      }
      program.school = school;
      const savedProgram = await this.programRepository.save(program);
      return savedProgram;
    } catch (error) {
      return {
        message: 'Failed to create program',
        error: error.message || error,
      };
    }
  }
  async findAll(): Promise<Program[]> {
    const program = await this.programRepository.find();
    return program;
  }

  // function to find a program by its id
  async findById(id: string): Promise<Program> {
    const program = await this.programRepository.findOne({ where: { id } });
    
    if (!program) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    return program;
  }

  async getAllProgramsBySchool(schoolId: string) {
    return this.programRepository.find({
      where: { school: { id: schoolId } },
      relations: ['courses'],
    });
  }

  update(id: number, updateProgramDto: UpdateProgramDto) {
    return `This action updates a #${id} program`;
  }

  remove(id: number) {
    return `This action removes a #${id} program`;
  }
}
