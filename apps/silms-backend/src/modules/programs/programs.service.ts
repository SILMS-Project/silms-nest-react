import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {  Program } from '@modules/programs/entities/program.entity'; 
import {  Course } from '@modules/courses/entities/course.entity'; 
import { Repository } from 'typeorm';
@Injectable()
export class ProgramsService {
  constructor(@InjectRepository(Program) private readonly programRepository:Repository<Program>){}
  async create(createProgramDto: CreateProgramDto) {
    try{
      const program =new Program
      program.programName=createProgramDto.programName
      program.description=createProgramDto.description
      program.requirements = createProgramDto.requirements;

      const courses = createProgramDto.courses.map((courseDto) => {
        const course = new Course();
        course.courseCode = courseDto.courseCode;
        course.courseTitle = courseDto.courseTitle;
        course.unit = courseDto.unit;
        course.semester = courseDto.semester;
        course.description=courseDto.description
        course.image=courseDto.image
        return course;
      });
      program.courses=courses
      const savedProgram = await this.programRepository.save(program);
      return savedProgram;
    } catch (error) {
      return { message: 'Failed to create program', error: error.message || error };
    }
  }
  findAll() {
    return `This action returns all programs`;
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
