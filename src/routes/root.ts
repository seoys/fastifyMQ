import { FastifyReply, FastifyRequest, FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/",
    // {
    // 	onRequest: [fastify.authenticate],
    // },
    async (request: FastifyRequest, reply: FastifyReply) => {
      // console.log(request.headers['cache-control']);
      reply.code(200).send({
        info: "EQL API!",
      });
    }
  );
};

export default root;
