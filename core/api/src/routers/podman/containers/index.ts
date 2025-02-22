import { containers } from '@api/src/lib/client';
import { router, publicProcedure } from '@api/src/tRPC';
import { TRPCError } from '@trpc/server';
import {
	containerArchiveGetSchema,
	containerByIdSchema,
	containerCreateSchema,
	containerListSchema,
	type ContainerListInput,
} from '@util/schemas/containers';

const p = publicProcedure;

export const containerRouter = router({
	create: p.input(containerCreateSchema).mutation(async ({ input }) => {
		try {
			const {
				image,
				command,
				entrypoint,
				env,
				labels,
				exposedPorts,
				hostConfig,
			} = input;

			const portBindings =
				exposedPorts?.reduce(
					(acc, portConfig) => {
						const { protocol, containerPort, hostPort } =
							portConfig;
						const key = `${containerPort}/${protocol}`; // 80/tpc, for example
						acc[key] = [
							{
								HostPort: hostPort
									? String(hostPort)
									: undefined,
							},
						];
						return acc;
					},
					{} as { [key: string]: { HostPort?: string }[] },
				) || {};

			const exposedPortsObj =
				exposedPorts?.reduce(
					(acc, portConfig) => {
						const { protocol, containerPort } = portConfig;
						const key = `${containerPort}/${protocol}`;
						acc[key] = {};
						return acc;
					},
					{} as { [key: string]: {} },
				) || {};

			const createOptions = {
				Image: image,
				Cmd: command,
				Entrypoint: entrypoint,
				Env: env
					? Object.entries(env).map(
							([key, value]) => `${key}=${value}`,
						)
					: undefined,
				Labels: labels,
				ExposedPorts: exposedPortsObj,
				HostConfig: {
					NetworkMode: hostConfig?.networkMode,
					AutoRemove: hostConfig?.autoRemove,
					Memory: hostConfig?.memory,
					MemorySwap: hostConfig?.memorySwap,
					PortBindings: portBindings,
				},
			};

			Object.keys(createOptions.HostConfig).forEach((key) => {
				const k = key as keyof (typeof createOptions)['HostConfig'];
				if (createOptions.HostConfig[k] === undefined) {
					delete createOptions.HostConfig[k];
				}
			});

			const res = await containers.post(
				'/containers/create',
				createOptions,
			);

			switch (res.status) {
				case 201:
					return { id: res.data.Id };
				case 400:
					throw new TRPCError({
						code: 'BAD_REQUEST',
						message: `Error from Socket: ${res.data.message}`,
						cause: res.data.cause,
					});
				case 404:
					throw new TRPCError({
						code: 'NOT_FOUND',
						message: `Error from Socket: ${res.data.message}`,
						cause: res.data.cause,
					});
				case 409:
					throw new TRPCError({
						code: 'CONFLICT',
						message: `Error from Socket: ${res.data.message}`,
						cause: res.data.cause,
					});
				case 500:
					throw new TRPCError({
						code: 'INTERNAL_SERVER_ERROR',
						message: `Error from Socket: ${res.data.message}`,
					});
			}
		} catch (error) {
			console.error('Error creating container:', error);
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: 'Failed to create container',
				cause: error,
			});
		}
	}),
	list: p.input(containerListSchema).query(async ({ input }) => {
		try {
			const { all, size, filters, limit } = input;

			function handleFilters(filters: ContainerListInput['filters']) {
				return JSON.stringify(filters);
			}

			await containers.get('/containers/json', {
				query: {
					all,
					size,
					limit,
					filters: handleFilters(filters),
				},
			});
		} catch (error) {
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: 'Could not list containers',
				cause: error,
			});
		}
	}),
	byId: p.input(containerByIdSchema).query(async ({ input }) => {
		const res = await containers.get('/containers/{name}/json', {
			path: {
				name: input.id,
			},
		});

		return res.data;
	}),
	archive: router({
		get: p.input(containerArchiveGetSchema).query(async ({ input }) => {
			const res = await containers.get('/containers/{name}/archive', {
				query: {
					path: input.path,
				},
				path: {
					name: input.id,
				},
			});

			switch (res.status) {
				case 200:
					return res.data;
				case 400:
					throw new TRPCError({
						code: 'BAD_REQUEST',
						cause: res.data.cause,
						message: res.data.message,
					});
				case 404:
					throw new TRPCError({
						code: 'NOT_FOUND',
						cause: res.data.cause,
						message: res.data.message,
					});
				case 500:
					throw new TRPCError({
						code: 'INTERNAL_SERVER_ERROR',
						cause: res.data.cause,
						message: res.data.message,
					});
			}
		}),
	}),
});
