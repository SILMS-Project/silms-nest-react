import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Repository } from 'typeorm';
import { School } from '@modules/schools/entities/school.entity'; 
import {  Program } from '@modules/programs/entities/program.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class SchoolsService {
  constructor (@InjectRepository(School) private readonly schoolRepository: Repository<School>){}
  create(createSchoolDto: CreateSchoolDto){
  try {
    const school = new School();
    school.name = createSchoolDto.name;
    school.abbreviation = createSchoolDto.abbreviation;

    const programs = createSchoolDto.programs.map((programName: string) => {
      const program = new Program();
      program.programName = programName;
      return program;
    });

    school.programs = programs;
    const savedSchool = this.schoolRepository.save(school);
    return savedSchool;
  } catch (error) {
    return { message: "Failed to create school", error: error.message || error };
  }
}




  async findAll(): Promise<School[]> {
    return this.schoolRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
