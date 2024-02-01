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
import { Lecturer } from '../lecturers/entities/lecturer.entity';

@Injectable()
export class LecturerCoursesService {
  constructor(
    @InjectRepository(LecturerCourses)
    private readonly lecturerCoursesRepository: Repository<LecturerCourses>,
    private lecturersService: LecturersService,
    private coursesService: CoursesService,
  ) {}

  async create(createLecturerCourseDto: CreateLecturerCourseDto) {
    const lecturerCourse = await this.lecturerCoursesRepository.findOne({
      where: {
        course: { id: createLecturerCourseDto.courseId },
        lecturer: { id: createLecturerCourseDto.lecturerId },
      },
    });

    if (lecturerCourse) {
      throw new Error('Already exists!');
    }

    const lecturerCoursesProps: LecturerCoursesProps = {
      lecturer: await this.lecturersService.findById(
        createLecturerCourseDto.lecturerId,
      ),
      course: await this.coursesService.findById(
        createLecturerCourseDto.courseId,
      ),
    };

    const newLecturerCourse = this.lecturerCoursesRepository.create({
      lecturer: lecturerCoursesProps.lecturer,
      course: lecturerCoursesProps.course,
    });

    return this.lecturerCoursesRepository.save(newLecturerCourse);
  }

  async findAll() {
    return await this.lecturerCoursesRepository.find();
  }

  async findById(id: string) {
    const lecturerCourse = await this.lecturerCoursesRepository.findOne({
      where: { id },
      relations: ['course', 'lecturer'],
    });

    if (!lecturerCourse) {
      throw new Error('Lecturer Course not found.');
    }

    return lecturerCourse;
  }

  async findCoursesByLecturer(lecturerId: string): Promise<Course[]> {
    const lecturerCourses = await this.lecturerCoursesRepository.find({
      where: { lecturer: { id: lecturerId } },
      relations: ['course', 'lecturer'],
    });

    return await Promise.all(
      lecturerCourses.map((lecturerCourse) =>
        this.coursesService.findById(lecturerCourse.course.id),
      ),
    );
  }

  async findLecturersByCourse(courseId: string): Promise<Lecturer[]> {
    const lecturerCourses = await this.lecturerCoursesRepository.find({
      where: { course: { id: courseId } },
      relations: ['course', 'lecturer'],
    });
    return await Promise.all(
      lecturerCourses.map((lecturerCourse) =>
        this.lecturersService.findById(lecturerCourse.lecturer.id),
      ),
    );
  }

  async findByLecturerId(lecturerId: string) {
    return await this.lecturersService.findById(lecturerId);
  }

  async findByCourseId(courseId: string) {
    return await this.coursesService.findById(courseId);
  }

  async unassignLectureToCourse(
    createLecturerCourseDto: CreateLecturerCourseDto,
  ) {
    const lecturerCourse = await this.lecturerCoursesRepository.findOne({
      where: {
        lecturer: { id: createLecturerCourseDto.lecturerId },
        course: { id: createLecturerCourseDto.courseId },
      },
    });


    if (!lecturerCourse) {
      if (!createLecturerCourseDto.lecturerId) {
        throw new Error('Lecturer ID is required for unassignment.');
      }
  
      if (!createLecturerCourseDto.courseId) {
        throw new Error('Course ID is required for unassignment.');
      }
  
      throw new Error('Lecturer Course Assignment not found.');
    }

    this.remove(lecturerCourse.id);
    return 'Lecturer unassigned successfully.';
  }

  update(id: string, updateLecturerCourseDto: UpdateLecturerCourseDto) {
    return `This action updates a #${id} lecturerCourse`;
  }

  async remove(id: string) {
    const lecturerCourse = await this.findById(id);
    return this.lecturerCoursesRepository.remove(lecturerCourse).then(() => {
      return 'Entry removed successfully.';
    });
  }
}
