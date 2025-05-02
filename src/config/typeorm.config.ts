import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Order } from 'src/entity/Order';
import { Product } from 'src/entity/Product';
import { User } from 'src/entity/User';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'cn37rqww@',
  database: 'order',
  entities: [User, Order, Product],
  synchronize: true,
};
