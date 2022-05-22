import { Order, OrderModel } from './order.model';

export async function findOrdersByUserId(user_id: string) {
  return OrderModel.find({ user: user_id });
}

export function createOrder(input: Partial<Order>) {
  return OrderModel.create(input);
}
