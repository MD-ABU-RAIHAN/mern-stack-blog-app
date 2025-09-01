import z, { email, optional, unknown } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import UserModel from "../models/UserModels";
import { TRPCError } from "@trpc/server";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper For Generating JWT Token and Set Token
const generateAndSetJwtToken = (userId: string, res: any) => {
  const SECRET_KEY = process.env.JWT_SECRET;
  if (!SECRET_KEY)
    throw new Error("Secret Key Not Define in Process .env file");
  const token = jwt.sign({ userId: userId }, SECRET_KEY);

  res.cookie("authToken", token, { httpOnly: true });
  return token;
};

const userRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        fullName: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // password Hash
        const hashedPassword = await bcrypt.hash(input.password, 10);

        const result = await UserModel.create({
          fullName: input.fullName,
          email: input.email,
          password: hashedPassword,
        });
        return {
          fullName: result.fullName,
          email: result.email,
          _id: result._id,
        };
      } catch (error: any) {
        if (error.code === 11000) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Email already exists",
          });
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  login: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(2).max(100),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const result = await UserModel.findOne({ email: input.email });
        if (!result)
          throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
        const isMatch = await bcrypt.compare(input.password, result.password);
        if (!isMatch)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Password incorrect!",
          });
        // jwt token
        const token = generateAndSetJwtToken(result._id.toString(), ctx.res);

        return {
          success: true,

          message: "Login successful",
          user: {
            _id: result._id,
            fullName: result.fullName,
            email: result.email,
          },
        };
      } catch (error: any) {
        throw new TRPCError({
          code: error.code || "INTERNAL_SERVER_ERROR",
          message: error.message || "Something want wrong",
        });
      }
    }),
  getCurrentUser: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.user)
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You are not authorized to access this route",
      });
    return ctx.user;
  }),
});

export default userRouter;
