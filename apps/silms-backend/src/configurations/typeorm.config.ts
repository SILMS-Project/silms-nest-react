// import { Auth } from "@/modules/auth/entities/auth.entity";
// import { Course } from "@/modules/courses/entities/course.entity";
// import { LecturerCourses } from "@/modules/lecturer-courses/entities/lecturer-courses.entity";
// import { Lecturer } from "@/modules/lecturers/entities/lecturer.entity";
// import { Program } from "@/modules/programs/entities/program.entity";
// import { School } from "@/modules/schools/entities/school.entity";
// import { StudentCourse } from "@/modules/student-courses/entities/student-course.entity";
// import { Student } from "@/modules/students/entities/student.entity";
// import { User } from "@/modules/users/entities/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

require('dotenv').config();


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres', 
    host: process.env.POSTGRES_HOST, 
    username: process.env.POSTGRES_USER, 
    database: process.env.POSTGRES_DATABASE, 
    password: process.env.POSTGRES_PASSWORD, 
    url: process.env.POSTGRES_URL,
    entities: [
      // Auth,
      // Course,
      // LecturerCourses,
      // Lecturer,
      // Program,
      // School,
      // StudentCourse,
      // Student,
      // User,
    ],
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'], // Migration files directory
    extra: {
      charset: 'utf8mb4_unicode_ci', 
    },
    synchronize: true, // Auto-create database tables based on entities (not recommended for production)
    autoLoadEntities: true, // Automatically load entity files
    logging: false, // Disable logging SQL queries
    ssl: {
      rejectUnauthorized: false, // Reject unauthorized SSL connections
    },
  }