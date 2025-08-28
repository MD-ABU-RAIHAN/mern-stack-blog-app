import z, { email, optional } from "zod";
import { publicProcedure, router } from "../trpc";
import UserModel from "../models/UserModels";
import { TRPCError } from "@trpc/server";

const userRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        fullName: z.string(),
        email: z.string().email(),
        password: z.string().min(2).max(100),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const result = await UserModel.create(input);
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
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(2).max(100),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const result = await UserModel.findOne({ email: input.email });
        if (!result)
          throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
        if (result.password !== input.password)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Password incorrect!",
          });

        // jwt token
      } catch (error: any) {
        throw new TRPCError({
          code: error.code,
          message: error.message,
        });
      }
    }),
});

export default userRouter;
