import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createBasket } from '../basket/basket.service';
import { createOrder } from '../orders/order.service';
import { findUserByEmail } from '../user/user.service';
import {
  createCheckout,
  findWallet,
  findWalletByUserId,
  getBalance,
  transferWallet,
} from './wallet.service';

export async function getUserWalletBalance(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;

  const wallet = await findWalletByUserId(userId);

  if (!wallet) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, wallet: 'wallet not found' });
    return;
  }

  const balance = await getBalance(wallet.rapyd_ewallet_address);

  return res.status(StatusCodes.OK).json({
    success: true,
    message: 'wallet balance',
    data: balance[0],
  });
}

export async function topUpWalletHandler(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;

  try {
    const wallet = await findWalletByUserId(userId);

    if (!wallet) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, wallet: 'wallet not found' });
      return;
    }

    const deposit = await createCheckout({
      amount: req.body.amount,
      user_id: userId,
      e_wallet_id: wallet.rapyd_ewallet_address,
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'checkout url',
      data: { link: deposit },
    });
  } catch (err: any) {
    console.error(err.response.data);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}

export async function transferByEmailHandler(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;

  try {
    const wallet = await findWalletByUserId(userId);

    if (!wallet) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, wallet: 'wallet not found' });
      return;
    }

    const { email, amount } = req.body;

    const receiver = await findUserByEmail(email);

    if (!receiver) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, message: 'user with email not found' });
      return;
    }

    const receiver_wallet = await findWalletByUserId(receiver._id);

    if (!receiver_wallet) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, wallet: 'wallet not found' });
      return;
    }

    const transfer = await transferWallet({
      sender_id: userId,
      sender_wallet: wallet.rapyd_ewallet_address,
      receiver_id: receiver._id,
      receiver_wallet: receiver_wallet.rapyd_ewallet_address,
      amount,
      info: 'transfer',
    });

    if (!transfer.success) {
      res
        .status(400)
        .json({ success: false, message: transfer.error.status.error_code });
      return;
    }

    return res
      .status(StatusCodes.OK)
      .json({ success: true, message: 'transfer successful', data: transfer });
  } catch (e: any) {
    console.error(e.response.data);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: e.message });
  }
}

export async function makePurchaseHandler(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;

  try {
    const wallet = await findWalletByUserId(userId);

    if (!wallet) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, wallet: 'wallet not found' });
      return;
    }

    const { to, url, amount, items, shipment_info } = req.body;

    const basket = await createBasket({
      title: 'amount from url',
      amount,
      url,
      owner: userId,
      paid: false,
      description: 'Basket of amount from url',
    });

    const receiver_wallet = await findWallet(to);

    if (!receiver_wallet) {
      res
        .status(400)
        .json({ success: false, message: 'invalid wallet address' });
      return;
    }

    const sender_wallet = await findWalletByUserId(userId);

    if (!sender_wallet) {
      res.status(400).json({ success: false, message: 'something went wrong' });
      return;
    }

    const transfer = await transferWallet({
      sender_id: userId,
      sender_wallet: wallet.rapyd_ewallet_address,
      receiver_id: receiver_wallet.user_id as any,
      receiver_wallet: receiver_wallet.rapyd_ewallet_address,
      amount,
      info: `payment for ${basket.basket_Id}`,
    });

    if (!transfer.success) {
      res
        .status(400)
        .json({ success: false, message: transfer.error.status.error_code });
      return;
    }

    basket.paid = true;
    await basket.save();

    const order = await createOrder({
      total_price: amount,
      payment_id: transfer.id,
      paid_at: Date.now() as any,
      user: userId,
      order_items: items,
      shipment_info,
      description: 'order',
    });

    if (!order) {
      res.status(400).json({ success: false, message: "can't place an order" });
      return;
    }

    return res
      .status(200)
      .json({ success: true, message: 'order place success', data: { order } });
  } catch (err: any) {
    console.error(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}
