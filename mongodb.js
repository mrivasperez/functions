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

    /*
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

    db.collection("users").insertMany(
      [
        {
          name: "Andrew",
          age: 26,
        },
        {
          name: "Jenny",
          age: 46,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Could not add users!");
        }

        console.log(result.ops);
      }
    );
    */
    // Challenge: Use insert many to inset the documents description, completed (boolean) 2. Setup callback to handle error or print ops 3. un the script 4. Refresh database in Robo3T and view data in tasks collection
  }
);
