/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Program } from '@modules/programs/entities/program.entity';
import { Repository } from 'typeorm';
import { SchoolsService } from '../schools/schools.service';
import { ProgramProps } from './interfaces/program.interface';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
    private schoolsService: SchoolsService,
  ) {}

  async create(createProgramDto: CreateProgramDto) {
    console.log(createProgramDto.programName)
    const program = await this.programRepository.findOne({where: {programName: createProgramDto.programName}});
    console.log(program)
    if (program) {
      throw new Error("Program already exists!")
    }
    const school = await this.schoolsService.findOne(createProgramDto.schoolId);

    const programProps: ProgramProps = {
      ...createProgramDto,
      school
    }

    const newProgram = this.programRepository.create(programProps)

    return await this.programRepository.save(newProgram)
  }

  async findAll(): Promise<Program[]> {
    return await this.programRepository.find({relations: ['school']});
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
  async findByName(programName: string): Promise<Program> {
    const program = await this.programRepository.findOne({ where: { programName }, relations:['school'] });
    
    if (!program) {
      throw new NotFoundException(`Program with Name ${programName} not found`);
    }

    return program;
  }

  async getAllProgramsBySchool(schoolId: string) {
    const programs = await this.programRepository.find({
      where: { school: { id: schoolId } },
      relations: ['courses'],
    });

    if (!programs || programs.length === 0) {
      throw new NotFoundException(`No Program with schoolId ${schoolId}`);
    }

    return programs;
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
      program.school = school;
    }
    // Save the updated schedule
    return this.programRepository.save(program);
  }

  async remove(id: string) {
    const program = await this.findById(id);
    return await this.programRepository.remove(program).then(() => {
      return {message: `Program with ${id} deleted.`}
    })
  }
}
