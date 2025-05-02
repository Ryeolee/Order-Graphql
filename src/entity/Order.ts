import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Order {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Number)
  @Column()
  userId: number;

  @Field(() => Number)
  @Column()
  productId: number;
}
