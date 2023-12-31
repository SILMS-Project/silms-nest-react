import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {  Program } from '@modules/programs/entities/program.entity'; 
import {  Course } from '@modules/courses/entities/course.entity'; 
import { Repository } from 'typeorm';
import { School } from '../schools/entities/school.entity';
import { program } from '@babel/template';
@Injectable()
export class ProgramsService {
  constructor(@InjectRepository(Program) private readonly programRepository:Repository<Program>,
  @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
  @InjectRepository(School) private readonly schoolRepository:Repository<School>){}
  async create(createProgramDto: CreateProgramDto) {
    try{
      const program =await this.programRepository.save(createProgramDto)
      const school = await this.schoolRepository.findOne({where:{id:createProgramDto.schoolId},});
      if (!school) {
        throw new Error(`school with id ${createProgramDto.schoolId} not found`);
      }
      program.school=school
      const savedProgram = await this.programRepository.save(program);
      return savedProgram;
    } catch (error) {
      return { message: 'Failed to create program', error: error.message || error };
    }
  }
  async findAll():  Promise<Program[]>{
    const program = await this.programRepository.find();
    return program;
  }


  findOne(id: number) {
    return `This action returns a #${id} program`;
  }

  update(id: number, updateProgramDto: UpdateProgramDto) {
    return `This action updates a #${id} program`;
  }

  remove(id: number) {
    return `This action removes a #${id} program`;
  }
}
