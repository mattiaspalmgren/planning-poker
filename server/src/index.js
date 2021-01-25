const getExpress = require("./express");
const getConnection = require("./db");
const routes = require("./sessionRoutes");
const SessionRepository = require("./sessionRepository");

const initLog = () => console.log(`Listening at: ${process.env.SERVER_PORT}`);

async function init() {
  const app = getExpress();
  const db = await getConnection();
  const sessionCollection = db.collection('sessions');
  const sessionRepository = new SessionRepository(sessionCollection);

  routes(app, sessionRepository).listen(process.env.SERVER_PORT, initLog);
}

(async () => {
  try {
    await init();
  } catch (error) {
    console.log("Starting app failed: ", { error })
  }
})();
