function sessionRoutes(app, repository) {
  app.post("/api/sessions", async (request, response) => {
    const session = await repository.create(request.body);
    response.json(session);
  });

  app.get("/api/sessions/:id", async (request, response) => {
    const id = request.params.id;
    const session = await repository.get(id);
    response.json(session);
  });

  return app;
}

module.exports = sessionRoutes;
