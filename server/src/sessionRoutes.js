function sessionRoutes(app, repository) {
  app.post("/api/sessions", async (request, response) => {
    const session = await repository.create(request.body);
    response.json(session);
  });

  return app;
}

module.exports = sessionRoutes;
