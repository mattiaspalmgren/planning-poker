const { v4: uuidv4 } = require('uuid');

class SessionRepository {
  storage;

  constructor() {
    this.storage = new Map();
  }

  async create(session) {
    const id = uuidv4();
    const sessionToCreate = { id, ...session };
    this.storage.set(id, sessionToCreate);
    return this.storage.get(id)
  }

  async get(id) {
    return this.storage.get(id)
  }
}

module.exports = SessionRepository;
