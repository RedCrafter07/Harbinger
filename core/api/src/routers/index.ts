import { router as tRPCRouter, publicProcedure } from '../tRPC';

export const router = tRPCRouter({
	hi: publicProcedure.query(() => {
		return 'Hello World!';
	}),
});
// export type definition of API
export type Router = typeof router;
