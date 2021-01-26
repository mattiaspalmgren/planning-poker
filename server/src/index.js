const socket = require("socket.io");
const getExpress = require("./express");
const getConnection = require("./db");
const routes = require("./sessionRoutes");
const SessionRepository = require("./sessionRepository");

const log = () => console.log(`Listening at: ${process.env.SERVER_PORT}`);

const socketConfig = {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
};

async function init() {
  const express = getExpress();
  const server = express.listen(process.env.SERVER_PORT, log);
  const io = socket(server, socketConfig);
  const db = await getConnection();
  const sessionCollection = db.collection("sessions");
  const sessionRepository = new SessionRepository(sessionCollection);
  routes(express, sessionRepository, io);
}

(async () => {
  try {
    await init();
  } catch (error) {
    console.log("Starting app failed: ", { error });
  }
})();
