import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
  @Column({ name: 'order_id' })
  orderId: number;

  @ManyToOne(() => Order, (order) => order.deliverys, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'order_id', referencedColumnName: 'id' }])
  order: Order;
}
