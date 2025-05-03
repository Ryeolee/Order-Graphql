import { Module } from '@nestjs/common';
import { UserService } from './service/User.Service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserResolver } from './resolver/UserResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { UserRepository } from './repository/UserRepository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './config/configuration';
import { OrderRepository } from './repository/OrderRepository';
import { OrderService } from './service/Order.Service';
import { OrderResolver } from './resolver/OrderResolver';
import { ProductResolver } from './resolver/ProductResolver';
import { ProductService } from './service/Product.Service';
import { ProductRepository } from './repository/ProductRepository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  controllers: [],
  providers: [
    UserResolver,
    UserRepository,
    UserService,
    OrderResolver,
    OrderRepository,
    OrderService,
    ProductResolver,
    ProductService,
    ProductRepository,
  ],
})
export class AppModule {}
