import { ObjectType, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/entity/Product';
import { ProductService } from 'src/service/Product.Service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async findProducts(): Promise<Product[]> {
    const products = await this.productService.findProducts();
    return products;
  }
}
