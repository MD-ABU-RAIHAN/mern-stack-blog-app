import { initTRPC, type inferAsyncReturnType } from "@trpc/server";
import { createContext } from "./createContext";

// create tRPC,tRPC router, Export rRPC Type

// type of Context
type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
