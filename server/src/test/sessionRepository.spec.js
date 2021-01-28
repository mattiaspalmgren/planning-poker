const SessionRepository = require("../sessionRepository");
jest.mock("../id", () => () => "ABCD");

let mockCollection;
const mockSession = {
  name: "main",
  sessionId: "ABCD",
  votes: [
    {
      clientId: "1",
      value: 4,
    },
  ],
};

describe("sessionRepository", () => {
  beforeEach(() => {
    const mockInsertOne = async (val) => ({ ops: [val] });
    const findOneAndUpdateMock = async (query, update, options) => ({
      value: { sessionId: "ABCD", name: "main", votes: update.$set.votes },
    });
    const findOneMock = async (_) => mockSession;

    mockCollection = {
      insertOne: jest.fn(mockInsertOne),
      findOneAndUpdate: jest.fn(findOneAndUpdateMock),
      findOne: jest.fn(findOneMock),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should create", async () => {
    const repository = new SessionRepository(mockCollection);
    const session = { name: "main" };

    const createdSession = await repository.create(session);

    expect(createdSession).toStrictEqual({
      name: "main",
      sessionId: "ABCD",
      votes: [],
    });
  });

  it("should add vote", async () => {
    const repository = new SessionRepository(mockCollection);
    const newVote = {
      clientId: "2",
      value: 8,
    };
    const updatedSession = await repository.update(mockSession.id, newVote);

    expect(updatedSession).toStrictEqual({
      ...mockSession,
      votes: [newVote, ...mockSession.votes]
    });
  });

  it("should update existing vote", async () => {
    const repository = new SessionRepository(mockCollection);
    const [ mockVote ] = mockSession.votes;
    const newVote = {
      clientId: mockVote.clientId,
      value: 8,
    };

    const updatedSession = await repository.update(mockSession.id, newVote);

    expect(updatedSession).toStrictEqual({
      ...mockSession,
      votes: [newVote]
    });
  });
});
