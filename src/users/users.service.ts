import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { IUser } from '../interfaces/user.interface';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async getAllUsers(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async getUserById(userId: string): Promise<IUser> {
    return this.userModel.findOne({ _id: userId });
  }

  async createUser(body: CreateUserDto) {
    return this.userModel.create({ ...body });
  }

  async deleteUser(userId: string) {
    await this.userModel.deleteOne({
      _id: userId,
    });
  }

  async updateUser(userId: string, body: CreateUserDto) {
    await this.userModel.updateOne({ _id: userId }, body);
  }
}
