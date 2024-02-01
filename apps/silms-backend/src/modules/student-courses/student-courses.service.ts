import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentCourseDto } from './dto/create-student-course.dto';
import { UpdateStudentCourseDto } from './dto/update-student-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCourse } from './entities/student-course.entity';
import { CoursesService } from '../courses/courses.service';
import { StudentsService } from '../students/students.service';

@Injectable()
export class StudentCoursesService {
  constructor(
    @InjectRepository(StudentCourse)
    private readonly studentCourseRepository: Repository<StudentCourse>,
    private coursesService: CoursesService,
    private studentsService: StudentsService,
  ) {}

  async create(
    createStudentCourseDto: CreateStudentCourseDto,
  ): Promise<StudentCourse> {
    const studentcoursemodule = await this.studentCourseRepository.findOneBy({student: {id: createStudentCourseDto.studentId}, course: {id: createStudentCourseDto.courseId}});
    if (studentcoursemodule) {
      throw new Error('Student already Registered');
    }

    const course = await this.coursesService.findById(
      createStudentCourseDto.courseId,
    )

    const student = await this.studentsService.findOne(createStudentCourseDto.studentId,)
    
    if (!course) {
      throw new Error(
        `Course with id ${createStudentCourseDto.courseId} does not exist`,
      );
    }

    if (!student) {
      throw new Error(
        `Course with id ${createStudentCourseDto.studentId} does not exist`,
      );
    }

    const studentCourseProps = {
   ...createStudentCourseDto,
      course: course,
      student: student,
    };

    const createdStudentCourse = this.studentCourseRepository.create(
      {...studentCourseProps},
    );


    return await this.studentCourseRepository.save(createdStudentCourse);
  }

  async findAll() {
    const studentCourses = await this.studentCourseRepository.find({relations: ['student', 'course']});
    if (!studentCourses || studentCourses.length === 0) {
      throw new Error('No student courses found');
    }
    return studentCourses;
  }

  find(id: string) {
    const studentCourse = this.studentCourseRepository.findOneBy({id});
    if (!studentCourse) {
      throw new Error('Student Course not found');
    }
    return studentCourse;
  }

  async findByStudentId(studentId: string): Promise<StudentCourse[]> {
    const studentCourse = await this.studentCourseRepository.find({
      where: { student: { id: studentId } },
      relations: ['student', 'course'],
    });

    if (!studentCourse) {
      throw new Error('Student Course not found');
    }

    return studentCourse;
  }

  update(id: number, updateStudentCourseDto: UpdateStudentCourseDto) {
    return `This action updates a #${id} studentCourse`;
  }

  async remove(id: string): Promise<StudentCourse> {
    const studentCourse = await this.studentCourseRepository.findOne({
      where: { id },
    });
    if (!studentCourse) {
      throw new NotFoundException(`Student course with ID ${id} not found`);
    }
    return await this.studentCourseRepository.remove(studentCourse);
  }
}
