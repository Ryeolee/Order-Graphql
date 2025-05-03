import { Injectable } from '@nestjs/common';
import { Order } from 'src/entity/Order';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class OrderRepository extends Repository<Order> {
  constructor(private readonly dataSource: DataSource) {
    super(Order, dataSource.createEntityManager());
  }

  async createOrder(order: Order) {
    this.save(order);
  }
}
