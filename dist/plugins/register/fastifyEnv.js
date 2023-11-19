"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var fastifyEnv_exports = {};
__export(fastifyEnv_exports, {
  default: () => fastifyEnv_default
});
module.exports = __toCommonJS(fastifyEnv_exports);
var import_fastify_plugin = __toESM(require("fastify-plugin"));
var import_env = __toESM(require("@fastify/env"));
const fastifyEnvModule = (0, import_fastify_plugin.default)(async (fastify, opts) => {
  const schema = {
    type: "object",
    required: ["DB_HOST", "REDIS", "SERVER", "REDIS_PORT"],
    properties: {
      DB_HOST: {
        type: "string"
      },
      REDIS: {
        type: "string",
        default: "localhost"
      },
      SERVER: {
        type: "string",
        default: "localhost"
      },
      REDIS_PORT: {
        type: "string",
        default: "6379"
      }
    }
  };
  const options = {
    dotenv: true,
    schema,
    data: process.env
  };
  fastify.register(import_env.default, options);
});
var fastifyEnv_default = fastifyEnvModule;
