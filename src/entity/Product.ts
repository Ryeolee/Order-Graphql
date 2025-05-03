import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Order } from './Order';
import { ProductImage } from './ProductImage';

@ObjectType()
@Entity()
export class Product {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  category: string;

  @OneToMany(() => Order, (order) => order.product)
  orders: Relation<Order>[];

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  productImages: Relation<ProductImage>;
}
