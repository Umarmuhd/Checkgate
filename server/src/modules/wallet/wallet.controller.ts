import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findUserByEmail } from '../user/user.service';
import {
  createCheckout,
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
