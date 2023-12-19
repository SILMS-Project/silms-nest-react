import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Hello')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get Hello for v1' })
  @ApiResponse({ status: 200, description: 'Hello response for v1' })
  getHellov1(): string {
    return this.appService.getHellov1();
  }

  @Version('2')
  @Get()
  @ApiOperation({ summary: 'Get Hello for v2' })
  @ApiResponse({ status: 200, description: 'Hello response for v2' })
  getHellov2(): string {
    return this.appService.getHellov2();
  }
}
