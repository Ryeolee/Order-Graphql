import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/UserRepository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findUsers() {
    return this.userRepository.find();
  }
}
