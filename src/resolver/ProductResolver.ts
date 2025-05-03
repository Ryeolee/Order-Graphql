import { Query, Resolver } from '@nestjs/graphql';
import { ProductInformationDto } from 'src/dto/ProductInformationDto';
import { Product } from 'src/entity/Product';
import { ProductService } from 'src/service/Product.Service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductInformationDto])
  async findProducts(): Promise<ProductInformationDto[]> {
    const products = await this.productService.findProducts();
    return products;
  }
}
