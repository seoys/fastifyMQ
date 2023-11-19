import { FastifyReply, FastifyRequest, FastifyPluginAsync } from 'fastify';
import axios from 'axios';
import _ from 'lodash';

const flagDatas = async () => {
	const url: string = `http://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=GzlC3tbBZjKnLF0%2B6SEN6nmOQPojGgCMQadcdWf29VQUadNy%2BNpzGS6gfr%2FCNetXaek6p1ofXof8%2BYMmpOcV3g%3D%3D&numOfRows=220&pageNo=1`;

	const result = await axios.get(url);

	return result ? result.data : [];
};

const index: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	fastify.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
		const RedisName = 'Nataions';
		const redisResult = await fastify.redis.get(RedisName);
		const result = redisResult ? JSON.parse(redisResult) : [];

		reply.code(200).send({
			status: 200,
			data: result,
		});
	});

	fastify.get('/datas', async (req: FastifyRequest, reply: FastifyReply) => {
		const result = await flagDatas();
		const RedisName = 'Nataions';
		const redisResult = await fastify.redis.set(
			RedisName,
			JSON.stringify(result),
		);

		reply.code(200).send({
			status: 200,
			redisResult,
			data: result,
		});
	});
};

export default index;
