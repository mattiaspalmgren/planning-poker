const express = require("express");
const cors = require("cors");

function getExpress() {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );

  return app;
}

module.exports = getExpress;
