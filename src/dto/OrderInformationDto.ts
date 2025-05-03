import { Field, ObjectType } from '@nestjs/graphql';
import { Delivery } from 'src/entity/Delivery';

@ObjectType()
export class OrderInformationDto {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  productId: number;

  @Field(() => [Delivery])
  deliverys: Delivery[];
}
