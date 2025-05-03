import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Order } from './Order';
import { Tier } from 'src/enum/Tier';

// GraphQL 스키마에서 객체 타입을 정의할 때 사용하는 데코레이터
@ObjectType()
@Entity()
export class User {
  // 필드 타입
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  nickname: string;

  @Field(() => String)
  @Column({ default: Tier.BRONZE })
  tier: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Relation<Order>[];
}
