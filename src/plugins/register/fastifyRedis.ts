import fp from 'fastify-plugin';
import fastRedis from '@fastify/redis';
import { FastifyInstance } from 'fastify';

const fastifyRedis = fp(async (fastify: FastifyInstance, opts) => {
	fastify.register(fastRedis, {
		host: fastify.config.REDIS,
		port: fastify.config.REDIS_PORT,
	});
});

export default fastifyRedis;
