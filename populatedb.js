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
      name: "Pasta",
      unit: "grams",
      category: "Carbohydrates",
      allergens: [],
    },
    {
      name: "Brown Rice",
      unit: "grams",
      category: "Carbohydrates",
      allergens: [],
    },
    {
      name: "White Rice",
      unit: "grams",
      category: "Carbohydrates",
      allergens: [],
    },
    {
      name: "Quinoa",
      unit: "grams",
      category: "Carbohydrates",
      allergens: [],
    },
    {
      name: "Ham",
      unit: "grams",
      category: "Protein",
      allergens: [],
    },
    {
      name: "Turkey",
      unit: "grams",
      category: "Protein",
      allergens: [],
    },
    {
      name: "Chicken",
      unit: "grams",
      category: "Protein",
      allergens: [],
    },
    {
      name: "Sausages",
      unit: "grams",
      category: "Protein",
      allergens: [],
    },
    {
      name: "Milk",
      unit: "ml",
      category: "Dairy",
      allergens: [],
    },
    {
      name: "Yoghurt",
      unit: "grams",
      category: "Dairy",
      allergens: [],
    },
    {
      name: "Cheese",
      unit: "grams",
      category: "Dairy",
      allergens: [],
    },
    {
      name: "Apple",
      unit: "grams",
      category: "FruitAndVegetables",
      allergens: [],
    },
    {
      name: "Pear",
      unit: "grams",
      category: "FruitAndVegetables",
      allergens: [],
    },
    {
      name: "Pineapple",
      unit: "grams",
      category: "FruitAndVegetables",
      allergens: [],
    },
    {
      name: "Celery",
      unit: "grams",
      category: "FruitAndVegetables",
      allergens: [],
    },
    {
      name: "Carrot",
      unit: "grams",
      category: "FruitAndVegetables",
      allergens: [],
    },
    {
      name: "Butter",
      unit: "grams",
      category: "FatsAndSugars",
      allergens: [],
    },
    {
      name: "Margerine",
      unit: "grams",
      category: "FatsAndSugars",
      allergens: [],
    },
    {
      name: "Olive oil",
      unit: "grams",
      category: "FatsAndSugars",
      allergens: [],
    },
    {
      name: "Chocolate chips",
      unit: "grams",
      category: "FatsAndSugars",
      allergens: [],
    },
    {
      name: "Oregano",
      unit: "grams",
      category: "HerbsSauceSpices",
      allergens: [],
    },
    {
      name: "Paprika",
      unit: "grams",
      category: "HerbsSauceSpices",
      allergens: [],
    },
    {
      name: "Mayonnaise",
      unit: "grams",
      category: "HerbsSauceSpices",
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
