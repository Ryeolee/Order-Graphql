import { ObjectType, Query, Resolver } from '@nestjs/graphql';
import { ProductInformationDto } from 'src/dto/ProductInformationDto';
import { Product } from 'src/entity/Product';
import { ProductService } from 'src/service/Product.Service';
import { ProductInformationType } from 'src/types/ProductInformationType';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductInformationDto])
  async findProducts(): Promise<ProductInformationType[]> {
    const products = await this.productService.findProducts();
    return products;
  }
}
