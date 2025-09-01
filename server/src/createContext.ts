import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import jwt from "jsonwebtoken";
import UserModel from "./models/UserModels";

export const createContext = async ({
  req,
  res,
}: CreateExpressContextOptions) => {
  const token = req.cookies?.authToken;

  let user = null;
  if (token) {
    try {
      const SECRET_KEY = process.env.JWT_SECRET;

      if (!SECRET_KEY)
        throw new Error("JWT_SECRET is not defined in .env file");
      const decode = jwt.verify(token, SECRET_KEY);

      if (typeof decode === "object")
        user = await UserModel.findById(decode.userId).select("-password");
    } catch (error) {
      res.clearCookie("authToken");
    }
  }

  return { req, res, user };
};
