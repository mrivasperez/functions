// GOAL: perform crud operations in MongoDB (create, update, deleted)

const mongodb = require("mongodb"),
  MongoClient = mongodb.MongoClient,
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

    // insert document to users collection
    db.collection("users").insertOne(
      {
        name: "Miguel",
        age: 24,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user.");
        }
        console.log(result.ops);
      }
    );
  }
);
