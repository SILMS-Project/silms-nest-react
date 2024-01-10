/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Repository } from 'typeorm';
import { School } from '@modules/schools/entities/school.entity'; 
import {  Program } from '@modules/programs/entities/program.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { ILike } from 'typeorm';

@Injectable()
export class SchoolsService {
  constructor (@InjectRepository(School) private readonly schoolRepository: Repository<School>){}
  async create(createSchoolDto: CreateSchoolDto){
  try {
    const school = new School();
    school.name = createSchoolDto.name;
    school.abbreviation = createSchoolDto.abbreviation;

    // const programs = createSchoolDto.programs.map((programName: string) => {
    //   const program = new Program();
    //   program.programName = programName;
    //   return program;
    // });

    // school.programs = programs;
    const savedSchool =await this.schoolRepository.save(school);
    return savedSchool;
  } catch (error) {
    return { message: "Failed to create school", error: error.message || error };
  }
}

  async findAll(): Promise<School[]> {
    return this.schoolRepository.find();
  }


  async findOne(id:string): Promise<School> {
    const school = await this.schoolRepository.findOne({
      where: {
        id: id,
      },
    });


    if (!school) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }

    return school;
  }

  //find school by abbrevation
  async findSchoolByAbbreviation(abbreviation: string): Promise<School[] | undefined> {
    const lowercaseAbbreviation = abbreviation.toLowerCase();
    try {
      const schools = await this.schoolRepository.find({
        where: {
          abbreviation: ILike(`%${lowercaseAbbreviation}%`), // Use Like for case-insensitive search
        },
        relations: ['programs']
      });
      return schools;
    } catch (error) {
      console.error('Error finding school by abbreviation:', error);
      throw new NotFoundException(`School with Abbreviation ${abbreviation} not found`);
    }
  }
  

  // update(id: number, updateSchoolDto: UpdateSchoolDto) {
  //   return `This action updates a #${id} school`;
  // }
  async update(id: string, updateSchoolDto: UpdateSchoolDto) {
    const school = await this.findOne(id);
  
    if (!school) {
      throw new NotFoundException(`School with id: ${id} not found`);
    }
  
    return await this.schoolRepository.update(id, updateSchoolDto);
  }
  
  

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
