import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";

// DB Connection
(async () => {
  const res = await mongoose.connect(
    "mongodb://127.0.0.1:27017/mernStackBlogAppDB"
  );
  if (!res) return console.log("DB Connection Failed!");
  console.log("DB Connection Success");
})();

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// tRPC Middleware
app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(4010, () => {
  console.log("Server is running on http://localhost:4010");
});

export type AppRouter = typeof appRouter;
