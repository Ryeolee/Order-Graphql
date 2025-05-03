import { Injectable } from '@nestjs/common';
import { ProductInformationDto } from 'src/dto/ProductInformationDto';
import { ProductRepository } from 'src/repository/ProductRepository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findProducts() {
    const products: ProductInformationDto[] = await this.productRepository.findProducts();
    return products;
  }
}
