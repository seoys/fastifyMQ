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
var flags_exports = {};
__export(flags_exports, {
  default: () => flags_default
});
module.exports = __toCommonJS(flags_exports);
var import_axios = __toESM(require("axios"));
const flagDatas = async () => {
  const url = `http://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=GzlC3tbBZjKnLF0%2B6SEN6nmOQPojGgCMQadcdWf29VQUadNy%2BNpzGS6gfr%2FCNetXaek6p1ofXof8%2BYMmpOcV3g%3D%3D&numOfRows=220&pageNo=1`;
  const result = await import_axios.default.get(url);
  return result ? result.data : [];
};
const index = async (fastify, opts) => {
  fastify.get("/", async (req, reply) => {
    const RedisName = "Nataions";
    const redisResult = await fastify.redis.get(RedisName);
    const result = redisResult ? JSON.parse(redisResult) : [];
    reply.code(200).send({
      status: 200,
      data: result
    });
  });
  fastify.get("/datas/", async (req, reply) => {
    const result = await flagDatas();
    const RedisName = "Nataions";
    const redisResult = await fastify.redis.set(
      RedisName,
      JSON.stringify(result)
    );
    reply.code(200).send({
      status: 200,
      redisResult,
      data: result
    });
  });
};
var flags_default = index;
