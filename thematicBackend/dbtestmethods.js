const { loginUser, addUser } = require('./usermethods.js'); // Ensure the path is correct
const ingredientMethods = require('./ingredientmethods'); // Ensure the path is correct
const mongoose = require("mongoose");
const User = require("./models/user");
const config = require("./config");
const bcrypt = require("bcrypt");
const saltRounds = 10; // The cost factor for hashing


const mongoURI = config.mongoURI;
console.log("mongoURI", mongoURI);

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
    console.log("Successfully connected to MongoDB.");
  });


async function testLogin() {
    try {
      // Assuming addUser has been called previously and the user exists
      const loginResponse = await loginUser("test@email.com", "password");
      console.log("Login successful for:", loginResponse);
    } catch (err) {
      console.error("Login failed:", err.message);
    }
      finally {
    console.log("Attempted login operation");
  }
  }
  
  async function testAddUser() {
      // Add a user
      const user = await addUser("test", "test@email.com", "password");
      console.log("User added:", user);
  }
  
//   testAddUser("test", "test@email.com", "password");
  
  testLogin("test@email.com", "password");
  
  // testRemoveUser();
  
  // addUser("luke", "l@gmail.com", "password");
  // removeUser("l@gmail")}
  