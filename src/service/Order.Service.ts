import { Injectable } from '@nestjs/common';
import { OrderCreateDto } from 'src/dto/OrderCreateDto';
import { Order } from 'src/entity/Order';
import { OrderRepository } from 'src/repository/OrderRepository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder(orderCreate: OrderCreateDto) {
    const order = Order.createOrder(orderCreate.getUserId(), orderCreate.getProductId());
    await this.orderRepository.createOrder(order);
  }
}
