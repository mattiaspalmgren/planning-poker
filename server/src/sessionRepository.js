const id = require("./id");

class SessionRepository {
  constructor(collection) {
    this.collection = collection;
  }

  async create(session) {
    const sessionId = id(4);
    const sessionToCreate = { sessionId, name: session.name, votes: [] };
    const { ops: insertedItems } = await this.collection.insertOne(
      sessionToCreate
    );
    const [insertedItem] = insertedItems;
    return insertedItem;
  }

  async update(sessionId, newVote) {
    const session = await this.get(sessionId);
    const filteredVotes = session.votes.filter(vote => vote.clientId !== newVote.clientId);
    const votes = [newVote, ...filteredVotes];

    const { value: updatedSession } = await this.collection.findOneAndUpdate(
      { sessionId },
      { $set: { votes } },
      { returnOriginal: false }
    );

    return updatedSession
  }

  async get(id) {
    return await this.collection.findOne({ sessionId: id });
  }
}

module.exports = SessionRepository;
