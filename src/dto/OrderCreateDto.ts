import { Field, InputType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class OrderCreateDto {
  @Field()
  @IsNumber()
  userId: number;

  @Field()
  @IsNumber()
  productId: number;

  getUserId() {
    return this.userId;
  }

  getProductId() {
    return this.productId;
  }
}
