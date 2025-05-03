import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Order } from './Order';

@ObjectType()
@Entity()
export class Delivery {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  status: string;

  @Field(() => Number)
  @Column()
  orderId: number;

  @OneToMany(() => Order, (order) => order.delivery)
  orders: Relation<Order>;
}
