const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.SERVER_PORT}`);
});

app.post("/api/sessions", (req, res) => {
  res.json(items);
});

const io = socket(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", () => {
  console.log("Made socket connection");
});
