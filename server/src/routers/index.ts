import { publicProcedure, router } from "../trpc";
import userRouter from "./userRouter";

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return { message: "Hello, world!" };
  }),
  user: userRouter,
});
