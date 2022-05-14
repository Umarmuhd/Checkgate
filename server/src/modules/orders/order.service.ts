import { OrderModel } from './order.model';

export async function findOrdersByUserId(user_id: string) {
  return OrderModel.find({ user: user_id });
}
