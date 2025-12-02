import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user && user.password === pass) {
      const { password, ...safeUser } = user;
      return safeUser;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };

    return {
      accessToken: this.jwt.sign(payload),
      refreshToken: this.jwt.sign(payload, { expiresIn: '7d' }),
      user,
    };
  }

  async register(data: { name: string; email: string; password: string }) {
    const user = await this.prisma.user.create({
      data,
    });

    const payload = { sub: user.id, email: user.email };

    return {
      user,
      accessToken: this.jwt.sign(payload),
      refreshToken: this.jwt.sign(payload, { expiresIn: '7d' }),
    };
  }
}
