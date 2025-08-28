import z from "zod";
import { publicProcedure, router } from "../trpc";
import UserModel from "../models/UserModels";
import { TRPCError } from "@trpc/server";

const userProcedure = publicProcedure.input(
  z.object({
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().min(2).max(100),
  })
);

const userRouter = router({
  postUser: userProcedure.mutation(async ({ input }) => {
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
});

export default userRouter;
