import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Delivery } from 'src/entity/Delivery';
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
  entities: [User, Order, Product, Delivery],
  synchronize: true,
};
