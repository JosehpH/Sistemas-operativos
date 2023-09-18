import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http';
import { UsersService } from 'src/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
