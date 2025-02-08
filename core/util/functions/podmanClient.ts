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

function createClient<T extends Record<string, any>>(
	axios: AxiosInstance,
): FunctionParams<T> {
	return {
		delete: (path, config) => {
			return axios.delete(path, config);
		},
		get: (path, config) => {
			return axios.get(path, config);
		},
		patch: (path, config) => {
			return axios.patch(path, config);
		},
		post: (path, body, config) => {
			return axios.post(path, body, config);
		},
		put: (path, config) => {
			return axios.put(path, config);
		},
	};
}
