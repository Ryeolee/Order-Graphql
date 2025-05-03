import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/dto/UserCreateDto';
import { User } from 'src/entity/User';
import { UserRepository } from 'src/repository/UserRepository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findUsers() {
    return this.userRepository.find();
  }

  async createUser(createUser: UserCreateDto) {
    const user = User.createUser(createUser.getNickname());
    return this.userRepository.createUser(user);
  }
}
