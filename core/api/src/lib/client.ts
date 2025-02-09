import { createClient } from '@util/functions/podmanClient';
import type { paths as PodmanPaths } from '@util/types/podman';
import axios from 'axios';

const client = axios.create({
	socketPath: process.env.SOCKET_PATH,
	baseURL: 'http://d/',
});

const containers = createClient<PodmanPaths>(client);

export { containers };
