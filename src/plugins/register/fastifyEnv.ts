import fp from 'fastify-plugin';
import fastifyEnv from '@fastify/env';

const fastifyEnvModule = fp(async (fastify, opts) => {
	const schema = {
		type: 'object',
		required: ['DB_HOST', 'REDIS', 'SERVER', 'REDIS_PORT'],
		properties: {
			DB_HOST: {
				type: 'string',
			},
			REDIS: {
				type: 'string',
				default: 'localhost',
			},
			SERVER: {
				type: 'string',
				default: 'localhost',
			},
			REDIS_PORT: {
				type: 'string',
				default: '6379',
			},
		},
	};

	const options = {
		dotenv: true,
		schema,
		data: process.env,
	};

	fastify.register(fastifyEnv, options);
});

export default fastifyEnvModule;
