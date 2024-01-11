/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike } from 'typeorm';

@Injectable()
export class SchoolsService {
  constructor (@InjectRepository(School) 
  private readonly schoolRepository: Repository<School>)
  {}

  async create(createSchoolDto: CreateSchoolDto){
  try {
    const school = new School();
    school.name = createSchoolDto.name;
    school.abbreviation = createSchoolDto.abbreviation;

    const foundName = await this.schoolRepository.findOne({where : {name: createSchoolDto.name}})
    const foundAbbr = await this.schoolRepository.findOne({where : {abbreviation: createSchoolDto.abbreviation}})

    if (foundAbbr && foundName) {
      throw new Error('School already exists');
    }

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
      throw new NotFoundException(`School with ID "${id}" not found`);
    }

    return school;
  }

  //find school by name
    async findByName(name: string): Promise<School[]> {
      const schools = await this.schoolRepository.find({ where: { name: name} });
      
      if (!schools || schools.length === 0) {
        throw new NotFoundException(`Schedule with Name ${name} not found`);
      }
  
      return schools;
    }

  //find school by abbrevation
  async findSchoolByAbbreviation(abbreviation: string): Promise<School[]> {
    const lowercaseAbbreviation = abbreviation.toLowerCase();

      const schools = await this.schoolRepository.find({
        where: {
          abbreviation: ILike(`%${lowercaseAbbreviation}%`), // Use Like for case-insensitive search
        },
        relations: ['programs']
      });
    
    if (schools.length === 0) {
      throw new NotFoundException(`School with Abbreviation ${abbreviation} not found`);
    }
    return schools;
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
