import {
	fastifyTRPCPlugin,
	type FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { createContext } from './tRPC/context';
import { router, type Router } from './routers/index';

const server = fastify();

server.register(fastifyTRPCPlugin, {
	prefix: '/api',
	trpcOptions: {
		router: router,
		createContext,
		onError({ path, error }) {
			console.error(`Error in tRPC handler on path '${path}':`, error);
		},
	} satisfies FastifyTRPCPluginOptions<Router>['trpcOptions'],
});

try {
	await server.listen({ port: 3000 });
} catch (err) {
	server.log.error(err);
	process.exit(1);
}
