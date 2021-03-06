import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createWallet } from '../wallet/wallet.service';
import { UserModel } from './user.model';
import { RegisterUserBody } from './user.schema';
import { createUser } from './user.service';

export async function registerUserHandler(req: Request, res: Response) {
  const { first_name, last_name, email, password } = req.body;

  try {
    if (!first_name || !last_name || !email || !password) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'FirstName, LastName, Email, Password',
      });
      return;
    }

    const user = await createUser({ first_name, last_name, email, password });
    const wallet = await createWallet(user._id);

    return res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: 'User created successfully' });
  } catch (e: any) {
    console.log(e);
    if (e.code === 11000) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ success: false, message: 'User already exists' });
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: e.message });
  }
}

export async function addAddressHandler(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;

  const { street_name, city, state, postal_code, country } = req.body;

  if (!street_name || !city || !state || !postal_code || !country) {
    return res.json({ status: false, message: "Fields can't be empty" });
  }

  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $push: { address: { street_name, city, state, postal_code, country } },
      },
      { new: true }
    ).exec();

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Address added success!',
      data: { user },
    });
  } catch (err: any) {
    console.log(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}

export async function addStoreHandler(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;
  const { store_name } = req.body;

  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $push: { stores: { store_name } },
      },
      { new: true }
    ).exec();

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Address added success!',
      data: { user },
    });
  } catch (err: any) {
    console.log(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}
