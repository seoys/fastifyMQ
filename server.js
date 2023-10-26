"use strict";

require("dotenv").config();
const Fastify = require("fastify");
const closeWithGrace = require("close-with-grace");
const rateLimit = require("@fastify/rate-limit");

let isLogger = false;

process.env.NODE_ENV === "develop" ? (isLogger = true) : (isLogger = false);

(async () => {
  const app = Fastify({
    logger: isLogger,
  });

  const appService = require("./dist/app.js");
  await app.register(appService);

  await app.addHook("onClose", async (instance, done) => {
    closeListeners.uninstall();
    done();
  });

  const closeListeners = closeWithGrace(
    { delay: process.env.FASTIFY_CLOSE_GRACE_DELAY || 500 },
    async function ({ signal, err, manual }) {
      if (err) app.log.error(err);
      await app.close();
    }
  );

  // Start listening.
  await app.listen(
    { host: "0.0.0.0", port: process.env.PORT || 10005 },
    (err) => {
      if (err) {
        app.log.error(err);
        process.exit(1);
      }

      console.log(`>> EQL API SERVER listen: ${process.env.PORT}`);
    }
  );
})();
