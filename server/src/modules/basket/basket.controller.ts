import busboy from 'busboy';
import fs from 'fs';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Basket, BasketModel } from './basket.model';
import { createBasket, findBasket } from './basket.service';
import { UserModel } from '../user/user.model';
import { UpdateBasketBody, UpdateBasketParams } from './basket.schema';

export async function createBasketHandler(
  req: Request<{}, {}, UpdateBasketBody>,
  res: Response
) {
  const { _id: userId } = res.locals.user;
  try {
    console.log(userId);
    const basket = await createBasket({ ...req.body, owner: userId });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Basket created success!',
      data: { basket },
    });
  } catch (err: any) {
    console.log(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}

export async function getSingleBasketHandler(req: Request, res: Response) {
  const basket_Id = req.params.basket_Id;

  try {
    const basket = await BasketModel.findOne({ basket_Id }).populate(
      'owner',
      'first_name last_name email address'
    );

    if (!basket) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'Basket not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Basket found',
      data: {
        basket,
      },
    });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}

export async function getAllUserBasketHandler(req: Request, res: Response) {
  const user_id = res.locals.user._id;

  try {
    const baskets = await BasketModel.find({ owner: user_id });
    return res
      .status(200)
      .json({ status: 'success', message: 'Basket list', data: { baskets } });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}

export async function deleteBasketHandler(req: Request, res: Response) {
  const basket_Id = req.params.basket_Id;

  try {
    const basket = await BasketModel.findOneAndDelete({ basket_Id });

    if (!basket) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'Basket not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Basket Deleted',
    });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}
