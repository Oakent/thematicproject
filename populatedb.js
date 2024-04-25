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
      name: "Carrot",
      unit: "grams",
      category: "Fruit and Vegetables",
      allergens: [],
    },
    {
      name: "Butter",
      unit: "grams",
      category: "Fats and Sugars",
      allergens: [],
    },
    {
      name: "Margerine",
      unit: "grams",
      category: "Fats and Sugars",
      allergens: [],
    },
    {
      name: "Olive oil",
      unit: "grams",
      category: "Fats and Sugars",
      allergens: [],
    },
    {
      name: "Chocolate chips",
      unit: "grams",
      category: "Fats and Sugars",
      allergens: [],
    },
    {
      name: "Oregano",
      unit: "grams",
      category: "Herbs Sauces and Spices",
      allergens: [],
    },
    {
      name: "Paprika",
      unit: "grams",
      category: "Herbs, Sauces and Spices",
      allergens: [],
    },
    {
      name: "Mayonnaise",
      unit: "grams",
      category: "Herbs, Sauces and Spices",
      allergens: [],
    },
  ];

  // Sample recipes

  // Insert sample data into the database
  Ingredient.insertMany(ingredients)
    .then(() => console.log("Sample data inserted successfully"))
    .catch((err) => console.error(err));
  console.log("Database populated successfully");
});
