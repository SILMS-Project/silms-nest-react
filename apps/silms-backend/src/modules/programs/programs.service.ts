/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Program } from '@modules/programs/entities/program.entity';
import { Repository } from 'typeorm';
import { School } from '../schools/entities/school.entity';
import { SchoolsService } from '../schools/schools.service';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
    private schoolsService: SchoolsService,
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

  // function to find a program by its name
  async findByName(programName: string): Promise<Program[]> {
    const programs = await this.programRepository.find({ where: { programName } });
    
    if (!programs || programs.length === 0) {
      throw new NotFoundException(`Schedule with Name ${programName} not found`);
    }

    return programs;
  }

  async getAllProgramsBySchool(schoolId: string) {
    return this.programRepository.find({
      where: { school: { id: schoolId } },
      relations: ['courses'],
    });
  }


  async update(id: string, updateProgramDto: UpdateProgramDto): Promise<Program> {
    const program = await this.programRepository.findOne({ where: { id } });
  
    if (!program) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  
    // Directly update properties from the DTO
    Object.assign(program, updateProgramDto);
  
    // Only fetch school if schoolId is provided in the DTO
    if (updateProgramDto.schoolId) {
      const school = await this.schoolsService.findOne(updateProgramDto.schoolId);
      if (!school) {
        throw new NotFoundException(`Course with ID ${updateProgramDto.schoolId} not found`);
      }
      program.school = school;
    }
    // Save the updated schedule
    return this.programRepository.save(program);
  }

  remove(id: number) {
    return `This action removes a #${id} program`;
  }
}
