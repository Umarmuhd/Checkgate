import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import omit from "../../helpers/omit";
import { findUserByEmail } from "../user/user.service";
import { LoginBody } from "./auth.schema";
import { signJwt } from "./auth.utils";

export async function loginHandler(
  req: Request<{}, {}, LoginBody>,
  res: Response
) {
  const { email, password } = req.body;

  // find the user by email
  const user = await findUserByEmail(email);
  if (!user) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, message: "Invalid login credentials" });
    return;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, message: "Invalid login credentials" });
  }

  const payload = omit(user.toJSON(), ["password", "__v"]);

  const jwt = signJwt(payload);

  res.cookie("accessToken", jwt, {
    maxAge: 3.154e10, // 1 year
    httpOnly: true,
    domain: "localhost",
    path: "/",
    sameSite: "strict",
    secure: false,
  });

  return res
    .status(StatusCodes.OK)
    .json({ success: true, message: "login success!", jwt });
}
