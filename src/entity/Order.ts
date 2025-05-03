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
import { User } from './User';
import { Product } from './Product';
import { Delivery } from './Delivery';

@ObjectType()
@Entity()
export class Order {
  constructor(userId: number, productId: number) {
    this.userId = userId;
    this.productId = productId;
  }
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Number)
  @Column('int', { name: 'user_id' })
  userId: number;

  @Field(() => Number)
  @Column('int', { name: 'product_id' })
  productId: number;

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

  @OneToMany(() => Delivery, (delivery) => delivery.order)
  deliverys: Relation<Delivery>;

  static createOrder(userId: number, productId: number) {
    return new Order(userId, productId);
  }
}
