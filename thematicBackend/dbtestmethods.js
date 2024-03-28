const { loginUser, addUser } = require('./usermethods.js');
const { addIngredient, findIngredientByName, updateIngredient, removeIngredient} = require('./ingredientmethods.js'); 
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
      const user = await addUser("x", "y", "z");
      console.log("User added:", user);
  }

  async function testRemoveUser() {
    try {
      const user = await removeUser("user email");
      console.log("User removed:", user);
    } catch (err) {
      console.error("Remove user failed:", err.message);
    } finally {
      console.log("Attempted remove user operation");
    }
  }


async function testAddIngredient() {
  try {
    const ingredient = await addIngredient("user name", "ingredient name", "units", "Category", "Allergens");
    console.log("Ingredient added:", ingredient, "to user:" , User);
  } catch (err) {
    console.error("Add ingredient failed:", err.message);
  }
    finally {
  console.log("Attempted add ingredient operation");
  }
}

async function testDisplayUserIngredients() {
  try {
    const user = await User.findOne({Username: "user name"});
    console.log("User found:", user);
    console.log("Ingredients:", user.personalIngredients);
  } catch (err) {
    console.error("Display user ingredients failed:", err.message);
  }
}
  
  // testLogin("test@email.com", "password");

  // testAddUser("luke", "l@gmail.com", "password");

  // testRemoveUser();
  
  // testAddIngredient("test", "testIngredient", "testUnit", "testCategory", "testAllergens");

  testDisplayUserIngredients("test");