import { 
  Controller, 
  UseGuards, 
  Get, 
  Request, 
  Post, 
  Body 
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import {AuthService} from './auth.service'

@Controller('auth')
export class AuthController {
  constructor( private authService: AuthService,private jwt: JwtService) {}  

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('refresh')
  async refresh(@Body() body) {
    const payload = this.jwt.verify(body.refreshToken);
    return {
      accessToken: this.jwt.sign({ sub: payload.sub }),
    };
  }
  @Post('register')
async register(@Body() body) {
  return this.authService.register(body);
}
@Post('login')
async login(@Body() body) {
  const user = await this.authService.validateUser(body.email, body.password);

  if (!user) {
    return { message: 'Invalid email or password' };
  }

  return this.authService.login(user);
}


}
