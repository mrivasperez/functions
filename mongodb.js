// GOAL: perform crud operations in MongoDB (create, update, deleted)

const 

const mongodb = require("mongodb"),
{ MongoClient, ObjectID } = require('mongodb'),
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
    // Challenge: Use insert many to insert the documents description, completed (boolean) 2. Setup callback to handle error or print ops 3. Run the script 4. Refresh database in Robo3T and view data in tasks collection

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       name: "Run",
    //       description: "go for a run",
    //       completed: false,
    //     },
    //     {
    //       name: "code",
    //       description: "code for an hour",
    //       completed: true,
    //     },
    //     {
    //       name: "work",
    //       description: "go to work",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("an error occured");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
