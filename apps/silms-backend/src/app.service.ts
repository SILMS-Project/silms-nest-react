import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHellov1(): string {
    return 'Hello World, This is version 1!';
  }

  getHellov2(): string {
    return 'Hello World, This is version 2!';
  }
}
