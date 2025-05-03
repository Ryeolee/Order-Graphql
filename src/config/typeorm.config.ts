import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'cn37rqww@',
  database: 'order',
  // entities: [User, Order, Product, Delivery, ProductImage],
  synchronize: true,
  autoLoadEntities: true,
};
