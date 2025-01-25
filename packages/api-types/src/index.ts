import axios from 'axios';
import openapi from 'swagger2openapi';
import path from 'node:path';
import openapiTS, { astToString, type OpenAPI3 } from 'openapi-typescript';
import yaml from 'yaml';

// 1. Download Document
// 2. Convert yaml to json
// 3. Convert that to openapi v3
// 4. Convert the openapi v3 to ts

// Download Document
const res = await axios.get(
	'https://storage.googleapis.com/libpod-master-releases/swagger-latest.yaml',
	{ responseType: 'arraybuffer' },
);

const fileContent = Buffer.from(res.data, 'binary').toString();

// Convert yaml to json
const json = yaml.parse(fileContent);

// OpenAPI v3 conversion
const openApiSchema = await openapi.convertObj(json, {});

// typescript conversion

// from https://openapi-ts.dev/node#usage
const ast = await openapiTS(openApiSchema.openapi as unknown as OpenAPI3);
const contents = astToString(ast);

// write file
await Bun.write(
	path.resolve(__dirname, '../../util/types/podman.ts'),
	contents,
);

console.log('Done!');
