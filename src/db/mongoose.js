// Mongoose uses mongodb
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/functions", {
  useNewUrlParser: true,
  useCreateIndex: true,
  //   prevent deprecation warning
  useUnifiedTopology: true,
});

// Create user model
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

/*  Create a new user

const me = new User({
  name: "Miguel",
  age: 24,
});

Save to database

me.save()
  .then(me => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error!", error);
  });

*/

/*
CHALLENGE: Create a model for tasks
1. Define the model with description and completed fiels
2. Create a new instance of the model
3. Save the model to the database
4. Test your work!
*/

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const firstTask = new Task({
  description: "Turn of the lights",
  completed: false,
});

firstTask
  .save()
  .then(firstTask => {
    console.log("Success!", firstTask);
  })
  .catch(error => {
    console.log("!ERROR!", error);
  });
