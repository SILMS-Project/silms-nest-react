import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
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
  synchronize: false, // Auto-create database tables based on entities (not recommended for production)
  autoLoadEntities: true, // Automatically load entity files
  logging: false, // Disable logging SQL queries
  ssl: {
    rejectUnauthorized: false, // Reject unauthorized SSL connections
  },
};
