import { initTRPC } from "@trpc/server";

// create tRPC,tRPC router, Export rRPC Type

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
