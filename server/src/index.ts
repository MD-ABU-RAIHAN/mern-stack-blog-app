import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";
import cookieParser from "cookie-parser";
import { createContext } from "./createContext";

import * as dotenv from "dotenv";
dotenv.config();

// DB Connection
(async () => {
  const res = await
  if (!res) return console.log("DB Connection Failed!");
  console.log("DB Connection Success");
})();

const app = express();
const port = process.env.PORT || 4010;

app.use(cookieParser());
app.all("/", (req, res, next) => {
  console.log(req.cookies["token"]);
  next();
});
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// tRPC Middleware
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;
