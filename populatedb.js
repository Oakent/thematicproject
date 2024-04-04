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

  // Sample ingredients
  const ingredients = [
    {
      name: "Flour",
      unit: "g",
      category: "Flour",
      allergens: ["Gluten"],
    },
    {
      name: "Milk",
      unit: "ml",
      category: "Dairy",
      allergens: ["Lactose"],
    },
    {
      name: "Eggs",
      unit: "count",
      category: "Protein",
      allergens: [],
    },
  ];

  // Sample recipes
  const recipes = [
    {
      name: "Pancakes",
      ingredients: [
        { ingredient: ingredients[0]._id, quantity: 200 }, // 200g Flour
        { ingredient: ingredients[1]._id, quantity: 300 }, // 300ml Milk
        { ingredient: ingredients[2]._id, quantity: 2 }, // 2 Eggs
      ],
      instructions: [
        "1. Mix all ingredients together.",
        "2. Cook on a hot pan.",
      ],
      info: {
        cuisine: "International",
        type: "Breakfast",
        servings: 4,
        time: 20, // 20 minutes
      },
    },
    {
      name: "Salad",
      ingredients: [
        { ingredient: ingredients[0]._id, quantity: 100 }, // 100g Flour
        { ingredient: ingredients[1]._id, quantity: 200 }, // 200ml Milk
        { ingredient: ingredients[2]._id, quantity: 1 }, // 1 Egg
      ],
      instructions: ["1. Toss all ingredients together.", "2. Serve chilled."],
      info: {
        cuisine: "International",
        type: "Appetizer",
        servings: 2,
        time: 10, // 10 minutes
      },
    },
  ];

  // Insert sample data into the database
  Ingredient.insertMany(ingredients)
    .then(() => Recipe.insertMany(recipes))
    .then(() => console.log("Sample data inserted successfully"))
    .catch((err) => console.error(err));
  console.log("Database populated successfully");
});
