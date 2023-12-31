import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {  Program } from '@modules/programs/entities/program.entity'; 
import {  Course } from '@modules/courses/entities/course.entity'; 
import { Repository } from 'typeorm';
import { School } from '../schools/entities/school.entity';
@Injectable()
export class ProgramsService {
  constructor(@InjectRepository(Program) private readonly programRepository:Repository<Program>,
  @InjectRepository(School) private readonly schoolRepository:Repository<School>){}
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
      const school = await this.schoolRepository.findOne({where:{id:createProgramDto.schoolId},});
      if (!program) {
        throw new Error(`Program with id ${createProgramDto.schoolId} not found`);
      }
      program.school = school;
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
