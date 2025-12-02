import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() body: { name: string; email: string; password: string }) {
    return this.userService.createUser(body); // FIXED
  }

  @Get('email/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email); // FIXED
  }
}
