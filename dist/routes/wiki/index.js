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
var wiki_exports = {};
__export(wiki_exports, {
  default: () => wiki_default
});
module.exports = __toCommonJS(wiki_exports);
var import_axios = __toESM(require("axios"));
const wikiDatas = async (q) => {
  const url = `https://ko.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${q}`;
  const result = await import_axios.default.get(url);
  return result ? result.data : [];
};
const index = async (fastify, opts) => {
  fastify.get("/", async (req, reply) => {
    const {
      q
    } = req.query;
    try {
      const result = await wikiDatas(q);
      const {
        query: {
          search
        }
      } = result;
      reply.code(200).send({
        status: 200,
        result: search
      });
    } catch (error) {
    }
  });
};
var wiki_default = index;
