/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { ProgramsService } from '../programs/programs.service';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    private readonly programsService: ProgramsService,
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {

    const course = await this.courseRepository.findOneBy({courseCode: createCourseDto.courseCode, program: {id: createCourseDto.programId}});

    if (course) {
      throw new Error('Course already exists');
    }

    const program = await this.programsService.findById(
      createCourseDto.programId,
    );

    if (!program) {
      throw new Error(
        `Program with id ${createCourseDto.programId} does not exist`,
      );
    }

    const courseProps = {
      ...createCourseDto,
      program: program,
    };

    const newCourse = this.courseRepository.create({
      ...courseProps,
    });
    
    return await this.courseRepository.save(newCourse);
  }

  async findAll(): Promise<Course[]> {
    const courses = await this.courseRepository.find(
      {relations: ['lecturerCourses.lecturer.user']}
    );
    return courses;
  }

  async findById(id: string) {
    console.log("ddd: ", id)
    const course = await this.courseRepository.findOne({ where: { id }, relations: ["courseModules", "lecturerCourses.lecturer.user", "studentCourses.student.user"] });
    if (!course) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    return course;
  }

  async findCourseByProgram(programId: string) {
    const courses = await this.courseRepository.find({
      where: { program: { id: programId } }
    });
    return courses;
  }

  async findCourseByLevel(level: number) {
    const courses = await this.courseRepository.find({
      where: { level: level },
    });
    return courses;
  }
  async findCourseByLevelProgram(programName: string, level: number) {
    // const programId = await this.programsService.findByName(program);
    const courses = await this.courseRepository.find({
      where: { program: { programName }, level: level },
    });
    console.log(courses);
    return courses;
  }

  async findCourseByLevelProgramSemester(
    programId: string,
    level: number,
    semester: number,
  ) {
    const courses = await this.courseRepository.find({
      where: {
        program: { id: programId },
        level: level,
        semester: semester,
      },
    });

    return courses;
  }

  async findByCode(code: string): Promise<Course> {
    const course = await this.courseRepository.findOne({
      where: { courseCode: code },
    } as FindOneOptions<Course>);

    if (!course) {
      throw new NotFoundException(`Course with code ${code} not found`);
    }

    return course;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.courseRepository.findOne({ where: { id: id } });

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    if (updateCourseDto.programId) {
      // Assuming you have a repository for Program, fetch the Program
      const program = await this.programsService.findById(
        updateCourseDto.programId,
      );

      if (!program) {
        throw new Error(
          `Program with id ${updateCourseDto.programId} not found`,
        );
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
