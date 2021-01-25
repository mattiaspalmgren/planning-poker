const MongoClient = require("mongodb").MongoClient;

let db;

const getConnection = async () => {
  if (db) {
    return db;
  }

  try {
    const client = await MongoClient.connect(
      `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
      { useUnifiedTopology: true }
    );

    db = client.db(process.env.DB_NAME);

  } catch (err) {
    console.error({ err });
  }

  return db;
};

module.exports = getConnection;
