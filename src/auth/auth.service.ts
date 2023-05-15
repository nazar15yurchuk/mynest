import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Payload } from '../interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async compareHash(password: string, hash: string) {
    return bcrypt.compare(password.toString(), hash);
  }

  async signPayload(payload) {
    return sign(payload, process.env.JWT_KEY, { expiresIn: '7d' });
  }

  async validateUser(payload: Payload) {
    return await this.usersService.findEmail(payload.email);
  }
}
