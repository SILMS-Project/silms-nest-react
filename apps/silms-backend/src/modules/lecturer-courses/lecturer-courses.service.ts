import { Injectable } from '@nestjs/common';
import { CreateLecturerCourseDto } from './dto/create-lecturer-course.dto';
import { UpdateLecturerCourseDto } from './dto/update-lecturer-course.dto';
import { LecturerCoursesProps } from './interfaces/lecturer-courses.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { LecturerCourses } from './entities/lecturer-courses.entity';
import { Repository } from 'typeorm';
import { LecturersService } from '../lecturers/lecturers.service';
import { CoursesService } from '../courses/courses.service';
import { Course } from '../courses/entities/course.entity';

@Injectable()
export class LecturerCoursesService {

  constructor (
    @InjectRepository(LecturerCourses) private readonly lecturerCoursesRepository: Repository<LecturerCourses>,
    private lecturersService: LecturersService,
    private coursesService: CoursesService
    ) {}

  async create(createLecturerCourseDto: CreateLecturerCourseDto) {

    const lecturerCoursesProps: LecturerCoursesProps = {
      lecturer: await this.lecturersService.findById(createLecturerCourseDto.lecturerId),
      course: await this.coursesService.findById(createLecturerCourseDto.courseId)
    }

    const newLecturerCourse = this.lecturerCoursesRepository.create({
      lecturer: lecturerCoursesProps.lecturer.id,
      course: lecturerCoursesProps.course.id
    });

    return this.lecturerCoursesRepository.save(newLecturerCourse);
  }

  async findAll() {
    return await this.lecturerCoursesRepository.find();
  }

  async findById(id: string) {
    const lecturerCourse = await this.lecturerCoursesRepository.findOne({where: {id}});
    console.log(lecturerCourse);

    if (!lecturerCourse) {
      throw new Error("Lecturer Course not found.")
    }

    return lecturerCourse;
  }

  async findCoursesByLecturer(lecturerId: string) {
    const lecturerCourses = await this.lecturerCoursesRepository.find({where: {lecturer: lecturerId}});
    const courses = await Promise.all(lecturerCourses.map(lecturerCourse => this.coursesService.findById(lecturerCourse.course)));
    return courses;
  }
  
  async findByLecturerId(lecturerId: string) {
    return await this.lecturersService.findById(lecturerId);
  }

  async findByCourseId(courseId: string) {
    return await this.coursesService.findById(courseId);
  }

  update(id: string, updateLecturerCourseDto: UpdateLecturerCourseDto) {
    return `This action updates a #${id} lecturerCourse`;
  }

  remove(id: string) {
    return `This action removes a #${id} lecturerCourse`;
  }
}
