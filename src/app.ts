/* eslint-disable no-underscore-dangle */
import "reflect-metadata";
import "module-alias/register";
import { FastifyInstance } from "fastify";
import { join } from "path";
import autoLoad from "@fastify/autoload";
import { Server, IncomingMessage, ServerResponse } from "http";

type optionType = {
  ignoreTrailingSlash: Boolean;
  logger: Boolean;
};

export default async (
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>
) => {
  const options: optionType = {
    ignoreTrailingSlash: true,
    logger: true,
  };

  await fastify.register(autoLoad, {
    dir: join(__dirname, "plugins"),
    options,
  });

  await fastify.register(autoLoad, {
    dir: join(__dirname, "routes"),
    options,
  });

  // fastify.addHook('preHandler', fastify.auth([fastify.verifyAdmin]));
};
