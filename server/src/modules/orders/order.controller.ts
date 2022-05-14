import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findOrdersByUserId } from './order.service';

export async function getUserOrdersHandler(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;

  const orders = await findOrdersByUserId(userId);

  return res.status(StatusCodes.OK).json({
    success: true,
    message: 'wallet balance',
    data: orders,
  });
}
