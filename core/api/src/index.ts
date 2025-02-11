import chalk from 'chalk';
import { Elysia } from 'elysia';
import { trpc } from '@elysiajs/trpc';
import { router } from './routers';
import { createContext } from './tRPC/context';

const app = new Elysia();

app.use(
	trpc(router, {
		endpoint: '/api',
		createContext,
	}),
);

app.listen(2000);

console.log(chalk.green(`[API]: Running on port ${app.server?.port}!`));
