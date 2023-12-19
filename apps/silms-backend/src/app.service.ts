import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHellov1():Promise<string> {
    return 'Hello World, This is version 1!';
  }

  async getHellov2(): Promise<string> {
    return 'Hello World, This is version 2!';
  }
}
