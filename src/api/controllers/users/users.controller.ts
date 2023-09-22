import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/api/dtos/CreateUserDto.dto';
import { UsersService } from 'src/service/users/users.service';

@Controller('users')
@ApiTags('Usuarios')
export class UsersController {
  constructor(private readonly animeService: UsersService) {}

  @Get()
  getAll() {
    return this.animeService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.animeService.findOne(id);
  }
  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() body: CreateUserDto) {
    return this.animeService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: CreateUserDto) {
    return this.animeService.update(id, body);
  }

  @Delete(':id')
  deleted(@Param('id') id: number) {
    return this.animeService.delete(id);
  }
}
