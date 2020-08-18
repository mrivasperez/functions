// -- NPM Modules
const mongoose = require("mongoose"),
  validator = require("validator");

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
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 1,

    validate(value) {
      // no negative number or 0 as age
      if (value < 1) {
        throw new Error("Age must be 1 or greater");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,

    validate(value) {
      if (!validator.isEmail(value)) {
        console.log("Your email did not pass validation.");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isLength(value, { min: 6, max: undefined })) {
        throw new Error("Your password must have a minimum of 6 characters");
      } else if (value === "password") {
        throw new Error("Your password cannot be password");
      }
    },
  },
});

// const newUser = new User({
//   name: "Catherine        Milk",

//   email: "mrivasperez@gmail.com",
//   password: "password",
// });

// newUser
//   .save()
//   .then(newUser => console.log(newUser))
//   .catch(error => console.log(error));

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

// Create task model

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: false,
  },
});

// const newTask = new Task({
//   description: "A new task for today",
// });

// newTask
//   .save()
//   .then(newTask => console.log(newTask))
//   .catch(error => console.log(error));

// const firstTask = new Task({
//   description: "Turn of the lights",
//   completed: false,
// });

// firstTask
//   .save()
//   .then(firstTask => {
//     console.log("Success!", firstTask);
//   })
//   .catch(error => {
//     console.log("!ERROR!", error);
//   });
