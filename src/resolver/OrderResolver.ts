import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderCreateDto } from 'src/dto/OrderCreateDto';
import { OrderInformationDto } from 'src/dto/OrderInformationDto';
import { Order } from 'src/entity/Order';
import { OrderService } from 'src/service/Order.Service';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Boolean)
  async createOrder(@Args('createOrder') orderCreate: OrderCreateDto): Promise<boolean> {
    await this.orderService.createOrder(orderCreate);
    return true;
  }

  @Query(() => [OrderInformationDto])
  async findOrders(@Args('userId') userId: number): Promise<OrderInformationDto[]> {
    return this.orderService.findOrders(userId);
  }
}
