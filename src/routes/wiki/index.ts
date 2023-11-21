import { FastifyReply, FastifyRequest, FastifyPluginAsync } from 'fastify';
import axios from 'axios';
import _ from 'lodash';

const wikiDatas = async (q: string) => {
    const url: string = `https://ko.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${q}`;

	const result = await axios.get(url);

	return result ? result.data : [];
};


const index: FastifyPluginAsync = async (fastify, opts): 
Promise<void> => {
	fastify.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
        const {
            q
        } = req.query as {
            q: string
        }
        try {

            const result = await wikiDatas(q)
            const {
                query: {
                    search
                }
            } = result
            reply.code(200).send({
                status: 200,
                result: search
            });
            
        } catch (error) {
            
        }
		
	});
};

export default index;
