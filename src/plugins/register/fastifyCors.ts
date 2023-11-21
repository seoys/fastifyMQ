import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import cors from '@fastify/cors';
import _ from 'lodash';

const fastifyCorsModule = fp(async (fastify: FastifyInstance, opts) => {
	fastify.register(cors, {
		origin: (origin, cb) => {
			cb(null, true);
			// const NodeEnv = fastify.config.NODE_ENV;
			// const whitelist = [];

			// if (NodeEnv === 'localhost') {
			// 	whitelist.push('http://localhost:8084');
			// 	whitelist.push('http://localhost:8086');
			// 	whitelist.push('http://localhost:8087');
			// } else if (NodeEnv === 'develop') {
			// 	whitelist.push('http://localhost:8084');
			// 	whitelist.push('http://localhost:8086');
			// 	whitelist.push('http://localhost:8087');
			// 	whitelist.push('https://ch2-dev.eqlstore.com');
			// 	whitelist.push('https://wch2-dev.eqlstore.com');
			// 	whitelist.push('https://nbo2-dev.thehandsome.com');
			// } else if (NodeEnv === 'staging') {
			// 	whitelist.push('http://localhost:8084');
			// 	whitelist.push('http://localhost:8086');
			// 	whitelist.push('http://localhost:8087');
			// 	whitelist.push('https://ch2-stg.eqlstore.com');
			// 	whitelist.push('https://nbo2-stg.thehandsome.com');
			// 	whitelist.push('https://wch2-stg.eqlstore.com');
			// } else {
			// 	whitelist.push('https://ch2.eqlstore.com');
			// 	whitelist.push('https://nbo2.thehandsome.com');
			// 	whitelist.push('https://wch2.eqlstore.com');
			// 	whitelist.push('https://ch.eqlstore.com');
			// 	whitelist.push('https://nbo.thehandsome.com');
			// 	whitelist.push('https://wch.eqlstore.com');
			// 	whitelist.push('https://www.eqlstore.com');
			// 	whitelist.push('https://m.eqlstore.com');
			// }

			// if (!_.isUndefined(origin)) {
			// 	if (_.indexOf(whitelist, origin) !== -1) {
			// 		cb(null, true);
			// 	} else {
			// 		cb(null, false);
			// 	}
			// } else {
			// 	cb(null, false);
			// }
		},
	});
});

export default fastifyCorsModule;
