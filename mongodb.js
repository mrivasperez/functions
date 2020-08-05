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

    /* 
    DELETE DOCUMENTS 
    

    // Delete many
    db.collection("users")
      .deleteMany({
        age: 26,
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

      GOAL: Remove one task from task database

      1. grab description (ID)
      2. setup call with query
      3. use promise 
      4. test!
    */

    //delete one
    // db.collection("tasks")
    //   .deleteOne({
    //     _id: new ObjectID("5efc0c2946f9a00dcc6ec42f"),
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // UPDATE DOCUMENTS
    /*
    CHALLENGE & GOALS: use updatemany to complete all tasks

    1. Check mongodb docs for updateMany
    2. Setup the call with query and updates
    3. Use promsie methods to setup success and error
    4. Test it out!
    */
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    //
    // Update one
    // if no call back is defined this method returns a promise
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5efe018e07d7372aa2addcf0"),
    //     },
    //     {
    //       $inc: { age: 33 },
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
);
