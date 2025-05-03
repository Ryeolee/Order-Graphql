import { ObjectType, Field } from '@nestjs/graphql';
import { ProductImage } from 'src/entity/ProductImage';

@ObjectType()
export class ProductInformationDto {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  category: string;

  @Field(() => [ProductImage])
  productImages: ProductImage[];
}
