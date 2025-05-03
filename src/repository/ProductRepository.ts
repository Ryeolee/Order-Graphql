import { Injectable } from '@nestjs/common';
import { Product } from 'src/entity/Product';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private readonly dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }

  async findProducts() {
    return this.find();
  }
}
