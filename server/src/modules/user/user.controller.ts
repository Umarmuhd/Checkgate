import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
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
