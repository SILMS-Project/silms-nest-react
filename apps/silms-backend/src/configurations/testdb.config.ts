import { ConfigService } from "@nestjs/config"
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
require('dotenv').config();


export function getConfig(config: ConfigService) {
   return {
    type: 'sqlite',  // Specify SQLite as the database type
    database: ':memory:',  // Use an in-memory database for testing
    entities: [
    //   Auth,
    //   Course,
    //   LecturerCourses,
    //   Lecturer,
    //   Program,
    //   School,
    //   StudentCourse,
    //   Student,
    //   User,
    ],  // Add your entities here
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    synchronize: false,  
   } as SqliteConnectionOptions;
  }