const { v4: uuidv4 } = require("uuid");
const dbConnection = require("./db");

class Repository {
  constructor(collection) {
    this.collection = collection;
  }

  async create(session) {
    this.db = await dbConnection();
    const id = uuidv4();
    const sessionToCreate = { id, ...session };
    const { ops: inserted } = await this.db
      .insertOne(sessionToCreate);

    return inserted;
  }

  async get(id) {
    return this.storage.get(id);
  }
}

module.exports = Repository;
