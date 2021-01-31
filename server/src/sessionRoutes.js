function sessionRoutes(app, repository, io) {
  app.post("/api/sessions", async (request, response) => {
    const session = await repository.create(request.body);
    await setupVoteHandling(repository, io, session.sessionId);
    response.json(session);
  });

  return app;
}

const setupVoteHandling = (repository, io, id) => {
  const namespaces = io.of(id);

  namespaces.on("connection", async (socket) => {
    const namespace = socket.nsp;
    const session = await repository.get(id);

    namespace.emit("session-update", session);

    socket.on("vote", async (vote) => {
      const session = await repository.update(id, vote);
      namespace.emit("votes-update", session.votes);
    });
  });
};

module.exports = sessionRoutes;
