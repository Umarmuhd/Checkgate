import busboy from "busboy";
import fs from "fs";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Basket, BasketModel } from "./basket.model";
import { createBasket, findBasket } from "./basket.service";
import { UserModel } from "../user/user.model";
import { UpdateBasketBody, UpdateBasketParams } from "./basket.schema";

export async function createBasketHandler(
  req: Request<{}, {}, UpdateBasketBody>,
  res: Response
) {
  const { _id: userId } = res.locals.user;
  try {
    console.log(userId);
    const basket = await createBasket({...req.body, owner:userId})
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Basket created success!",
      data: { basket },
    });
  } catch (err: any) {
    console.log(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}
