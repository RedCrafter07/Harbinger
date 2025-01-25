import { initTRPC } from '@trpc/server';

export const t = initTRPC.create();
export const { procedure: publicProcedure, router } = t;
