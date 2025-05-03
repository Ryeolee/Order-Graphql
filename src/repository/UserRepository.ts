import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/User';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findUsers() {
    return this.find();
  }

  async createUser(user: User) {
    this.save(user);
  }
}
