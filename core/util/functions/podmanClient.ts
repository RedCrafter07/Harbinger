import { OpenApiAxios } from '@web-bee-ru/openapi-axios';
import type { paths } from '../types/podman';
import axios from 'axios';

export function createPodmanClient(socketPath: string) {
	const client = axios.create({
		socketPath,
		baseURL: '/',
		adapter: 'fetch',
	});

	const api = new OpenApiAxios<paths, 'axios'>(client, {
		validStatus: 'axios',
	});

	return api;
}
