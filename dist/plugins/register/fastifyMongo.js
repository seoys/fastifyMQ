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
var fastifyMongo_exports = {};
__export(fastifyMongo_exports, {
  default: () => fastifyMongo_default
});
module.exports = __toCommonJS(fastifyMongo_exports);
var import_fastify_plugin = __toESM(require("fastify-plugin"));
var import_mongoose = __toESM(require("mongoose"));
const fastifyMongo = (0, import_fastify_plugin.default)(async (fastify, opts) => {
  import_mongoose.default.set("strictQuery", false);
  try {
    await import_mongoose.default.connect(fastify.config.DB_HOST, {
      maxPoolSize: 50,
      connectTimeoutMS: 1e4,
      socketTimeoutMS: 3e4
    });
    console.log("** Connected to Database");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
var fastifyMongo_default = fastifyMongo;
