const { v4: uuidv4 } = require("uuid");

class SessionRepository {
  constructor(collection) {
    this.collection = collection;
  }

  async create(session) {
    const sessionId = uuidv4();
    const sessionToCreate = { sessionId, ...session };
    const { ops: insertedItems } = await this.collection.insertOne(sessionToCreate);
    const [ insertedItem ] = insertedItems;
    return insertedItem;
  }

  async get(id) {
    return await this.collection.findOne({ sessionId: id });
  }
}

module.exports = SessionRepository;
