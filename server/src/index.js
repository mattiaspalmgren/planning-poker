const socket = require('socket.io');

const getExpress = require("./express");
const getConnection = require("./db");
const routes = require("./sessionRoutes");
const SessionRepository = require("./sessionRepository");

const initLog = () => console.log(`Listening at: ${process.env.SERVER_PORT}`);

async function init() {
  const express = getExpress();
  const db = await getConnection();
  const sessionCollection = db.collection('sessions');
  const sessionRepository = new SessionRepository(sessionCollection);

  const app = routes(express, sessionRepository).listen(process.env.SERVER_PORT, initLog);

  const io = socket(app, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Made socket connection");
    socket.emit('message', 'You have successfully joined the session')
  });
}

(async () => {
  try {
    await init();
  } catch (error) {
    console.log("Starting app failed: ", { error })
  }
})();
