import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '@/modules/users/services/users.service';
import { CreateUserDto } from "@/modules/users/dto/create-user.dto";
import { Role } from '@/utils/constants';
import { User } from '@/modules/users/entities/user.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let userService: UsersService;

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

    controller = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user with middle name', async () => {
      const createUserDto: CreateUserDto = {
        firstName: 'John',
        middleName: 'Doe',
        lastName: 'Smith',
        email: 'john.doe@example.com',
        password: 'Password123!',
        role: Role.Applicant,
      };

      const createdUser: User = {
        id: '1',
        email: 'john.doe@example.com',
        password: 'Password123!', // Assuming it's hashed
        role: Role.Applicant,
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        profile: null, // You may need to adjust this based on your Profile entity
      }; // Mock the created user

      jest.spyOn(userService, 'create').mockResolvedValue(createdUser);

      const result = await controller.create(createUserDto);

      expect(result).toBe(createdUser);
    });

    it('should create a new user without middle name', async () => {
      const createUserDto: CreateUserDto = {
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'Password123!',
        role: Role.Applicant,
      };

      const createdUser: User = {
        id: '1',
        email: 'john.doe@example.com',
        password: 'Password123!', // Assuming it's hashed
        role: Role.Applicant,
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        profile: null, // You may need to adjust this based on your Profile entity
      }; // Mock the created user

      jest.spyOn(userService, 'create').mockResolvedValue(createdUser);

      const result = await controller.create(createUserDto);

      expect(result).toBe(createdUser);
    });

    // it('should flag incorrect email format', async () => {
    //   const createUserDto: CreateUserDto = {
    //     firstName: 'John',
    //     middleName: 'Doe',
    //     lastName: 'Doe',
    //     email: 'invalidemail', // Invalid email format
    //     password: 'Password123!',
    //     role: Role.Applicant,
    //   };

    //   await expect(controller.create(createUserDto)).rejects.toThrow()
    // });

    // it('should validate password requirements', async () => {
    //   const createUserDto: CreateUserDto = {
    //     firstName: 'John',
    //     middleName: 'Doe',
    //     lastName: 'Doe',
    //     email: 'john.doe@example.com',
    //     password: 'weakpassword', // Does not meet requirements
    //     role: Role.Applicant,
    //   };

    //   await expect(controller.create(createUserDto)).rejects.toThrowError();
    // });

    // it('should flag if required details are missing', async () => {
    //   const createUserDto: CreateUserDto = {
    //     firstName: '',
    //     middleName: '',
    //     lastName: '',
    //     email: '',
    //     password: '', // Does not meet requirements
    //     role: Role.Applicant,
    //   };

    //   await expect(controller.create(createUserDto)).rejects.toThrowError();
    // });
  });
});
