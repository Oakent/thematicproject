const mongoose = require("mongoose");
const User = require("./models/user");
const Recipe = require("./models/recipe");
const Ingredient = require("./models/ingredient");

const config = require("./config");
const mongoURI = config.mongoURI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB");

  // Create sample users
  const user1 = new User({
    Username: "user1",
    Password: "password123",
    email: "user1@example.com",
  });
  const user2 = new User({
    Username: "user2",
    Password: "password456",
    email: "user2@example.com",
  });

  // Save users to the database
  await user1.save();
  await user2.save();
  console.log("Users created");

  // Create sample ingredients
  const ingredient1 = new Ingredient({
    name: "Flour",
    unit: "cups",
    category: "Baking",
    allergens: ["Gluten"],
  });
  const ingredient2 = new Ingredient({
    name: "Sugar",
    unit: "cups",
    category: "Baking",
    allergens: [],
  });

  // Save ingredients to the database
  await ingredient1.save();
  await ingredient2.save();
  console.log("Ingredients created");

  // Create sample recipes
  const recipe1 = new Recipe({
    name: "Chocolate Cake",
    ingredients: [
      { ingredient: ingredient1._id, quantity: 2 },
      { ingredient: ingredient2._id, quantity: 1 },
    ],
    instructions: [
      "Preheat oven to 350°F",
      "Mix ingredients",
      "Bake for 30 minutes",
    ],
    info: {
      cuisine: "Dessert",
      type: "Cake",
      servings: 8,
      time: 60,
    },
  });
  const recipe2 = new Recipe({
    name: "Spaghetti Carbonara",
    ingredients: [],
    instructions: ["Cook pasta", "Fry bacon", "Mix with eggs and cheese"],
    info: {
      cuisine: "Italian",
      type: "Pasta",
      servings: 4,
      time: 30,
    },
  });

  // Save recipes to the database
  await recipe1.save();
  await recipe2.save();
  console.log("Recipes created");

  // Create sample cupboards
  const cupboard1 = new Cupboard({
    ingredients: [ingredient1._id],
  });
  const cupboard2 = new Cupboard({
    ingredients: [ingredient2._id],
  });

  // Save cupboards to the database
  await cupboard1.save();
  await cupboard2.save();
  console.log("Cupboards created");

  console.log("Database populated successfully");
});
