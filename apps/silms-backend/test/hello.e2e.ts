import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto';
import { Role } from '@/utils/constants';
import { User } from '@/modules/users/entities/user.entity';
import { TestDBInitiator, createTestDataSource } from './config.e2e';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '.././src/app.module';
import { INestApplication } from '@nestjs/common';


describe('UsersController (HTTP)', () => {
  let app: INestApplication;
  let dataSource: DataSource;
  let databaseConfig: TestDBInitiator;

  beforeAll(async () => {
    databaseConfig = new TestDBInitiator();
    dataSource = await createTestDataSource(databaseConfig.dbOptions);

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          ...databaseConfig.dbOptions,
          autoLoadEntities: true,
        }),
        AppModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await dataSource.destroy();
    await app.close();
  });


  it('should ensure successful creation with middle name', async () => {
    const userRepository = dataSource.getRepository(User);
    const user: CreateUserDto = {  
      firstName: 'Zion',
    middleName: 'Doe',
    lastName: 'Smith',
    email: 'Zion.check@example.com',
    password: 'Password123!',
    role: Role.Applicant, 
  };
  
    const resp = await request(app.getHttpServer()).post(`/backend/v1/users/create`).send(user);
  
    expect(resp.status).toEqual(201);
    expect(resp.body).toEqual(user);
  
    const message = await userRepository.findOneOrFail({
      where: { id: resp.body['id'] },
    });
  });

});
