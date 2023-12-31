import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorFilter } from './filters/error.filter';
import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { RequestLoggerMiddleware } from './utils/request-logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configurations/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { SchoolsModule } from './modules/schools/schools.module';
import { ProgramsModule } from './modules/programs/programs.module';
import { StudentsModule } from './modules/students/students.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LecturersModule } from './modules/lecturers/lecturers.module';
import { StudentCoursesModule } from './modules/student-courses/student-courses.module';
import { AuthModule } from './modules/auth/auth.module';
import { MailModule } from './modules/mail/mail.module';
import { LecturerCoursesModule } from './modules/lecturer-courses/lecturer-courses.module';
import { CourseContentsModule } from './modules/course-contents/course-contents.module';
import { AssessmentsModule } from './modules/assessments/assessments.module';
import { GradesModule } from './modules/grades/grades.module';
import { SubmissionsModule } from './modules/submissions/submissions.module';
import { CourseModulesModule } from './modules/course-modules/course-modules.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'silms-frontend', 'dist'),
      exclude: ['/api*'],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
    UsersModule,
    SchoolsModule,
    ProgramsModule,
    StudentsModule,
    CoursesModule,
    LecturersModule,
    StudentCoursesModule,
    LecturerCoursesModule,
    AuthModule,
    MailModule,
    CourseContentsModule,
    AssessmentsModule,
    GradesModule,
    SubmissionsModule,
    CourseModulesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    Logger,
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
})
export class AppModule {
  constructor() {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
