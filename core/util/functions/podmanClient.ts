import {
	AxiosHeaders,
	type AxiosInstance,
	type AxiosRequestConfig,
	type AxiosResponse,
} from 'axios';

type Method = 'get' | 'delete' | 'post' | 'put' | 'patch';

type Paths<Paths, M extends Method> = {
	[P in keyof Paths]: Paths[P] extends { [K in M]: unknown } ? P : never;
}[keyof Paths & string];

type Config<
	S extends Record<string, any>,
	P extends string,
	M extends Method,
> = Omit<RouteData, 'responses'> & S[P][M];

interface RouteData {
	parameters?: {
		query?: Record<string, unknown>;
		header?: Record<string, unknown>;
		path?: Record<string, unknown>;
	};
	requestBody?: {
		content: Record<string, Record<string, unknown>>;
	};
	responses?: Record<
		number,
		{
			headers: {
				[name: string]: unknown;
			};
			content: unknown;
		}
	>;
}

type RequestBody<C extends RouteData> = C extends {
	requestBody?: { content?: { 'application/json': infer B } };
}
	? B
	: never;

interface RequestConfig<C extends RouteData> extends AxiosRequestConfig {
	headers?: C['parameters'] extends { header?: infer H }
		? H & AxiosHeaders // Merge with Axios' header type
		: never;
	query?: C['parameters'] extends { query?: infer Q } ? Q : never;
	path?: C['parameters'] extends { path?: infer P } ? P : never;
}

type Response<C extends RouteData> = {
	[S in keyof C['responses']]: AxiosResponse<
		C['responses'][S] extends { content: { 'application/json': infer D } }
			? D
			: never
	> & { status: S };
}[keyof C['responses'] & number];

type FunctionParams<S extends Record<string, any>> = {
	[M in Method]: M extends 'post'
		? <P extends Paths<S, M> & string>(
				path: P,
				body?: RequestBody<Config<S, P, M>>,
				config?: RequestConfig<Config<S, P, M>>,
		  ) => Promise<Response<Config<S, P, M>>>
		: <P extends Paths<S, M> & string>(
				path: P,
				config?: RequestConfig<Config<S, P, M>>,
		  ) => Promise<Response<Config<S, P, M>>>;
};

export function createClient<T extends Record<string, any>>(
	axios: AxiosInstance,
): FunctionParams<T> {
	return {
		delete: (path, config) => {
			const axiosConfig = { ...config, path: undefined };

			return axios.delete(insertPaths(path, config?.path), axiosConfig);
		},
		get: (path, config) => {
			const axiosConfig = { ...config, path: undefined };

			return axios.get(insertPaths(path, config?.path), axiosConfig);
		},
		patch: (path, config) => {
			const axiosConfig = { ...config, path: undefined };

			return axios.patch(insertPaths(path, config?.path), axiosConfig);
		},
		post: (path, body, config) => {
			const axiosConfig = { ...config, path: undefined };

			return axios.post(
				insertPaths(path, config?.path),
				body,
				axiosConfig,
			);
		},
		put: (path, config) => {
			const axiosConfig = { ...config, path: undefined };

			return axios.put(insertPaths(path, config?.path), axiosConfig);
		},
	};
}

function insertPaths(path: string, paths?: unknown) {
	if (!paths) return path;

	const typedPaths = paths as Record<string, string>;

	for (const p in typedPaths) {
		path = path.replace(`{${p}}`, typedPaths[p]);
	}

	return path;
}
