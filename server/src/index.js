const express = require("express");
const socket = require("socket.io");
const cors = require("cors");
const SessionRepository = require("./sessionRepository");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const sessionRepository = new SessionRepository();

const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.SERVER_PORT}`);
});

app.post("/api/sessions", async (request, response) => {
  const session = await sessionRepository.create(request.body);
  response.json(session);
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
