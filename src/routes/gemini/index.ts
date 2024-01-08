import { FastifyReply, FastifyRequest, FastifyPluginAsync } from 'fastify';
import _ from 'lodash';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(`AIzaSyDYYXgyS4D2i4zMtkVH3LIANriwuxylPOs`);

const index: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	fastify.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
		const { q } = req.query as {
			q: string;
		};

		const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

		const chat = model.startChat({
			history: [],
			generationConfig: {
				maxOutputTokens: 200,
			},
		});

		const result = await chat.sendMessage(q);
		const response = await result.response;
		const text = response.text();

		try {
			reply.code(200).send({
				status: 200,
				message: text,
			});
		} catch (error: any) {
			console.log(`error message : ${error}`);
		}
	});
};

export default index;
