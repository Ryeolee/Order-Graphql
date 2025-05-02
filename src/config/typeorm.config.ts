import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/dto/User';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'cn37rqww@',
  database: 'order',
  entities: [User],
  synchronize: true,
};
