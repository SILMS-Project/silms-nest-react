import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @ApiOperation is added to provide information about the endpoint in Swagger documentation
  // @ApiResponse is added to specify the response status and description

  // POST /auth
  @Post()
  @ApiOperation({ summary: 'Create a new authentication record' })
  @ApiResponse({ status: 201, description: 'Authentication record successfully created' })
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  // GET /auth
  @Get()
  @ApiOperation({ summary: 'Get all authentication records' })
  @ApiResponse({ status: 200, description: 'List of all authentication records' })
  findAll() {
    return this.authService.findAll();
  }

  // GET /auth/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get an authentication record by ID' })
  @ApiResponse({ status: 200, description: 'Authentication record found by ID' })
  @ApiResponse({ status: 404, description: 'Authentication record not found' })
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  // PATCH /auth/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update an authentication record by ID' })
  @ApiResponse({ status: 200, description: 'Authentication record successfully updated' })
  @ApiResponse({ status: 404, description: 'Authentication record not found' })
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  // DELETE /auth/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an authentication record by ID' })
  @ApiResponse({ status: 200, description: 'Authentication record successfully deleted' })
  @ApiResponse({ status: 404, description: 'Authentication record not found' })
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
