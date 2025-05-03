import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path'; // path 모듈을 이렇게 임포트해야 합니다.

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'cn37rqww@',
  database: 'order',
  entities: [path.join(__dirname, '/../**/entity/*{.ts,.js}')],
  synchronize: true,
  autoLoadEntities: true,
};
