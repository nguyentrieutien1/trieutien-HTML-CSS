import { NextFunction, Request, Response } from "express";
import { Cart } from "../modules/cart/cart.model";
import { IGetUserAuthInfoRequest } from "../types/custom.type";

const checkCartUserExits = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.user?._id;
    const findCartUser = await Cart.findOne({ user: _id });
    const cartUser = new Cart({ user: _id });
    if (!findCartUser) {
      await cartUser.save();
      req.cartId = cartUser._id;
    } else {
      req.cartId = findCartUser?._id;
    }
    next();
  } catch (error) {}
};

export { checkCartUserExits };