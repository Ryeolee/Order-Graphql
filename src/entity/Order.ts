import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
import { Product } from './Product';
import { Delivery } from './Delivery';

@ObjectType()
@Entity()
export class Order {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  //   @Field(() => Number)
  //   @Column('int', { name: 'user_id' })
  //   userId: number;

  //   @Field(() => Number)
  //   @Column('int', { name: 'product_id' })
  //   productId: number;

  @ManyToOne(() => User, (user) => user.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(() => Product, (product) => product.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Delivery, (delivery) => delivery.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'delivery_id', referencedColumnName: 'id' }])
  delivery: Delivery;
}
