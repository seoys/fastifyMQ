import fp from 'fastify-plugin';
import mongoose from 'mongoose';

const fastifyMongo = fp(async (fastify, opts) => {
	mongoose.set('strictQuery', false);

	try {
		await mongoose.connect(fastify.config.DB_HOST, {
			maxPoolSize: 50,
			connectTimeoutMS: 10000,
			socketTimeoutMS: 30000,
		});

		console.log('** Connected to Database');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
});

export default fastifyMongo;
