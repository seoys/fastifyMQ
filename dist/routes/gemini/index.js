"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var gemini_exports = {};
__export(gemini_exports, {
  default: () => gemini_default
});
module.exports = __toCommonJS(gemini_exports);
var import_generative_ai = require("@google/generative-ai");
const genAI = new import_generative_ai.GoogleGenerativeAI(`AIzaSyDYYXgyS4D2i4zMtkVH3LIANriwuxylPOs`);
const index = async (fastify, opts) => {
  fastify.get("/", async (req, reply) => {
    const { q } = req.query;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 200
      }
    });
    const result = await chat.sendMessage(q);
    const response = await result.response;
    const text = response.text();
    try {
      reply.code(200).send({
        status: 200,
        message: text
      });
    } catch (error) {
      console.log(`error message : ${error}`);
    }
  });
};
var gemini_default = index;
