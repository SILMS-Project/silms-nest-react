import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Program } from '../programs/entities/program.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(Course) private readonly courseRepository: Repository<Course>,
  @InjectRepository(Program) private readonly programRepository: Repository<Program>,){}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = await this.courseRepository.save(createCourseDto)
    const program = await this.programRepository.findOne({where:{id:createCourseDto.programId},});
    if (!program) {
      throw new Error(`Program with id ${createCourseDto.programId} does not exist`);
    }
    course.program = program;
    const savedCourse = await this.courseRepository.save(course);
    return savedCourse;
  }


  async findAll():  Promise<Course[]>{
    const courses = await this.courseRepository.find();
    return courses;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  async findCourseByProgram(programId:string){
    const courses=await this.courseRepository.find({where:{ program: { id: programId }}})
    return courses
  }

  async findCourseByLevel(level:number){
    const courses=await this.courseRepository.find({where:{level:level}})
    return courses
  }
  async findCourseByLevelProgram(programId:string,level:number){
    const courses=await this.courseRepository.find({where:{program: { id: programId },
      level:level}})
    return courses
  }

  async findCourseByLevelProgramSemester(programId:string,level:number,semester:number){
    const courses = await this.courseRepository.find({
      where: {
        program: { id: programId },
        level: level,
        semester: semester,
      },
    });

    return courses;
  }
  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.courseRepository.findOne({where:{id:id}});

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    if (updateCourseDto.programId) {
      // Assuming you have a repository for Program, fetch the Program
      const program = await this.programRepository.findOne({where:{id:updateCourseDto.programId}});
  
      if (!program) {
        throw new Error(`Program with id ${updateCourseDto.programId} not found`);
      }
  
      // Update the relationship
      course.program = program;
    }
  
    Object.assign(course, updateCourseDto);

    const updatedCourse = await this.courseRepository.save(course);

    return updatedCourse;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
