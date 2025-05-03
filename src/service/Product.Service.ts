import { Injectable } from '@nestjs/common';
import { Product } from 'src/entity/Product';
import { ProductRepository } from 'src/repository/ProductRepository';
import { ProductInformationType } from 'src/types/ProductInformationType';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findProducts() {
    const products: ProductInformationType[] = (await this.productRepository.findProducts()).map(
      (product) => ({
        ...product,
        productImages: product.getProductImages(),
      }),
    );
    console.log(products);
    return products;
  }
}
