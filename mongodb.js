// GOAL: perform crud operations in MongoDB (create, read, update, deleted)

// CREATE
const { mongodb, MongoClient, ObjectID } = require("mongodb"),
  connectionURL = "mongodb://127.0.0.1:27017",
  databaseName = "functions";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database :(");
    }

    const db = client.db(databaseName);
  }
);
