import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

 @Post()
createUser(@Body() body: { name: string; email: string; password: string }) {
  return this.userService.createUser(body.name, body.email, body.password);
}

  @Get('email/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }
}
