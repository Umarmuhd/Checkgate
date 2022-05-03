import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserModel } from "./user.model";
import { RegisterUserBody } from "./user.schema";
import { createUser } from "./user.service";

export async function registerUserHandler(
  req: Request<{}, {}, RegisterUserBody>,
  res: Response
) {
  const { first_name, last_name, email, password } = req.body;

  try {
    await createUser({ first_name, last_name, email, password });

    return res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: "User created successfully" });
  } catch (e) {
    if (e.code === 11000) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ success: false, message: "User already exists" });
      return;
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: e.message });
  }
}

export async function addAddressHandler(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;

  const { street_name, city, state, postal_code, country } = req.body;

  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $push: { address: { street_name, city, state, postal_code, country } },
      },
      { new: true }
    ).exec();

    console.log(user);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Address added success!",
      data: { user },
    });
  } catch (error) {
    console.log(error);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message });
  }
}
