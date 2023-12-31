import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '@/modules/users/services/users.service';
import { CreateUserDto } from "@/modules/users/dto/create-user.dto";
import { Role } from '@/utils/constants';
import { User } from '@/modules/users/entities/user.entity';
import { HttpException } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('UsersController (HTTP)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
      
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should flag incorrect email format', async () => {
    const createUserDto: CreateUserDto = {
      firstName: 'John',
      middleName: 'Doe',
      lastName: 'Doe',
      email: 'invalidemail', // Invalid email format
      password: 'Password123!',
      role: Role.Applicant,
    };

    const response = await request(app.getHttpServer())
      .post('/v1/users/create') // Adjust the endpoint path as needed
      .send(createUserDto)
      .expect(400); // Expecting a 400 Bad Request response

    // Assert that the response body or message contains information about the invalid email format
    expect(response.body.message).toMatch(/invalid email format/i);
  });

  // Add other tests as needed...

  afterEach(async () => {
    await app.close();
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  // describe('create', () => {
  //   it('should create a new user with middle name', async () => {
  //     const createUserDto: CreateUserDto = {
  //       firstName: 'John',
  //       middleName: 'Doe',
  //       lastName: 'Smith',
  //       email: 'john.doe@example.com',
  //       password: 'Password123!',
  //       role: Role.Applicant,
  //     };

  //     const createdUser: User = {
  //       id: '1',
  //       email: 'john.doe@example.com',
  //       password: 'Password123!', // Assuming it's hashed
  //       role: Role.Applicant,
  //       isVerified: true,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       profile: null, // You may need to adjust this based on your Profile entity
  //     }; // Mock the created user

  //     jest.spyOn(userService, 'create').mockResolvedValue(createdUser);

  //     const result = await controller.create(createUserDto);

  //     expect(result).toBe(createdUser);
  //   });

  //   it('should create a new user without middle name', async () => {
  //     const createUserDto: CreateUserDto = {
  //       firstName: 'John',
  //       middleName: '',
  //       lastName: 'Doe',
  //       email: 'john.doe@example.com',
  //       password: 'Password123!',
  //       role: Role.Applicant,
  //     };

  //     const createdUser: User = {
  //       id: '1',
  //       email: 'john.doe@example.com',
  //       password: 'Password123!', // Assuming it's hashed
  //       role: Role.Applicant,
  //       isVerified: true,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       profile: null, // You may need to adjust this based on your Profile entity
  //     }; // Mock the created user

  //     jest.spyOn(userService, 'create').mockResolvedValue(createdUser);

  //     const result = await controller.create(createUserDto);

  //     expect(result).toBe(createdUser);
  //   });

    // Failed
    // it('should flag incorrect email format', async () => {
    //   const createUserDto: CreateUserDto = {
    //     firstName: 'John',
    //     middleName: 'Doe',
    //     lastName: 'Doe',
    //     email: 'invalidemail', // Invalid email format
    //     password: 'Password123!',
    //     role: Role.Applicant,
    //   };
    
    //   // Use `resolves` matcher instead of `rejects.toThrow`
    //   const createPromise = Promise.reject(controller.create(createUserDto));
    //   await expect(createPromise).rejects.toThrowError(/invalid email format/i);
    // });

  //   it('should validate password requirements', async () => {
  //   //   const createUserDto: CreateUserDto = {
  //   //     firstName: 'John',
  //   //     middleName: 'Doe',
  //   //     lastName: 'Doe',
  //   //     email: 'john.doe@example.com',
  //   //     password: 'weakpassword', // Does not meet requirements
  //   //     role: Role.Applicant,
  //   //   };

  //   //   const createPromise = Promise.reject(controller.create(createUserDto));
  //   //   await expect(createPromise).rejects.toThrowError();
  //   // });

  //   // it('should flag if required details are missing', async () => {
  //   //   const createUserDto: CreateUserDto = {
  //   //     firstName: '',
  //   //     middleName: '',
  //   //     lastName: '',
  //   //     email: '',
  //   //     password: '', 
  //   //     role: Role.Applicant,
  //   //   };
  //   //   const createPromise = Promise.resolve(controller.create(createUserDto));
  //   //   await expect(createPromise).rejects.toThrowErrorMatchingInlineSnapshot();
  //   // });
  // });
});
