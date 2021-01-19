class Session {
  constructor(id, name, votes = []) {
    this.id = id;
    this.name = name;
    this.votes = votes;
  }
}

module.exports = Session;
