import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Version,
} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from './roles-auth.guard';
import { Roles } from '../auth/guards/roles.decorator';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Version('1')
  @Post('create')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User successfully created' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Version('1')
  @Roles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of all users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Version('1')
  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({ status: 200, description: 'User found by ID' })
  @ApiResponse({ status: 404, description: 'User not found' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Version('1')
  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiResponse({ status: 200, description: 'User successfully updated' })
  @ApiResponse({ status: 404, description: 'User not found' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Version('1')
  //@Roles(['admin'])
  //@UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({ status: 200, description: 'User successfully deleted' })
  @ApiResponse({ status: 404, description: 'User not found' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
