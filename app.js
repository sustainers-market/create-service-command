const express = require("express");
const asyncHandler = require("express-async-handler");
const app = express();

const logger = require("@sustainers/logger");
const errorMiddleware = require("@sustainers/error-middleware");
const expressMiddleware = require("@sustainers/express-middleware");

expressMiddleware(app);

app.post(
  "/",
  asyncHandler(async (req, res) => {
    logger.info("Request: ", {
      params: req.params,
      body: req.body,
      query: req.query,
      headers: req.headers
    });
    res.send("🍉");
  })
);

app.use(errorMiddleware);

module.exports = app;
