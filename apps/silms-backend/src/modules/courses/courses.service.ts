import { Injectable } from '@nestjs/common';
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
    const course = new Course();
    course.courseCode = createCourseDto.courseCode;
    course.courseTitle = createCourseDto.courseTitle;
    course.unit = createCourseDto.unit;
    course.semester = createCourseDto.semester;
    course.description = createCourseDto.description || null;
    course.image = createCourseDto.image || null;
    
    const program = await this.programRepository.findOne({where:{id:createCourseDto.programId},});

    // Check if the program exists before associating it with the course
    if (!program) {
      throw new Error(`Program with id ${createCourseDto.programId} not found`);
    }

    // Assign the program to the course
    course.program = program;
    const savedCourse = await this.courseRepository.save(course);

    return savedCourse;
  }


  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
