import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/repository/ProductRepository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findProducts() {
    return this.productRepository.findProducts();
  }
}
