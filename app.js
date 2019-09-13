const express = require("express");
const asyncHandler = require("express-async-handler");
const app = express();

const logger = require("@sustainers/logger");
const middleware = require("@sustainers/middleware");

const errorHandler = require("./src/error_handler");

middleware(app);

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

errorHandler(app);

module.exports = app;
