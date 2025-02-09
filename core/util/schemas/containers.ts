import { z } from 'zod';

// Shared base schemas
// May be validated further at a later point
const containerId = z.string().min(1).describe('Container ID or name');
const imageName = z.string();
const containerIdName = z.string();
const portProto = z.string();
const int = z.number().int();
const label = z.string();
const networkNameId = z.string();
const volumeNameMount = z.string();

export const containerCreateSchema = z.object({
	image: z.string().min(1),
	command: z.array(z.string()).optional(),
	entrypoint: z.string().array().optional(),
	env: z.record(z.string()).optional(),
	labels: z.record(z.string()).optional(),
	exposedPorts: z.array(
		z.object({
			protocol: z.enum(['tcp', 'udp', 'sctp']).default('tcp'),
			containerPort: z.number().int().positive(),
			hostPort: z.number().int().positive().optional(),
		}),
	),
	hostConfig: z
		.object({
			networkMode: z.string().default('bridge'),
			autoRemove: z.boolean().default(false),
			memory: z.number().int().positive().optional(),
			memorySwap: z.number().int().optional(),
		})
		.optional(),
});

export const containerListSchema = z.object({
	all: z.boolean().default(false),
	limit: z.number().int().positive().optional(),
	size: z.boolean().default(false),
	filters: z
		.object({
			ancestor: z.array(imageName).optional(),
			before: z.array(containerIdName).optional(),
			expose: z.array(portProto).optional(),
			exited: z.array(int).optional(),
			health: z
				.array(z.enum(['starting', 'healthy', 'unhealthy', 'none']))
				.optional(),
			id: z.array(z.string()).optional(),
			'is-task': z.array(z.enum(['true', 'false'])).optional(),
			label: z.array(label).optional(),
			name: z.array(z.string()).optional(),
			network: z.array(networkNameId).optional(),
			publish: z.array(portProto).optional(),
			since: z.array(containerIdName).optional(),
			status: z
				.array(
					z.enum([
						'created',
						'restarting',
						'running',
						'removing',
						'paused',
						'exited',
						'dead',
					]),
				)
				.optional(),
			volume: z.array(volumeNameMount).optional(),
		})
		.optional(),
});

export const containerByIdSchema = z.object({
	id: containerId,
});

export const containerArchiveGetSchema = z.object({
	id: containerId,
	path: z.string().min(1),
});

export const containerArchivePutSchema = z.object({
	id: containerId,
	path: z.string().min(1),
	overwrite: z.boolean().default(true),
	data: z.instanceof(Buffer).or(z.string()),
});

export const containerAttachSchema = z.object({
	id: containerId,
	streams: z.object({
		stdin: z.boolean().default(false),
		stdout: z.boolean().default(true),
		stderr: z.boolean().default(true),
	}),
	detach: z.boolean().default(false),
});

export const containerLogsSchema = z.object({
	id: containerId,
	follow: z.boolean().default(false),
	since: z.string().datetime().optional(),
	until: z.string().datetime().optional(),
	tail: z.number().int().positive().optional(),
	timestamps: z.boolean().default(false),
});

export const containerStatsSchema = z.object({
	id: containerId,
	stream: z.boolean().default(true),
	oneShot: z.boolean().default(false),
});

// Type exports
export type ContainerCreateInput = z.infer<typeof containerCreateSchema>;
export type ContainerListInput = z.infer<typeof containerListSchema>;
export type ContainerByIdInput = z.infer<typeof containerByIdSchema>;
export type ContainerArchiveGetInput = z.infer<
	typeof containerArchiveGetSchema
>;
export type ContainerArchivePutInput = z.infer<
	typeof containerArchivePutSchema
>;
export type ContainerAttachInput = z.infer<typeof containerAttachSchema>;
export type ContainerLogsInput = z.infer<typeof containerLogsSchema>;
export type ContainerStatsInput = z.infer<typeof containerStatsSchema>;
