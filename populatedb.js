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

const sampleRecipe = new Recipe({
  name: "Spaghetti Carbonara",
  ingredients: [
    {
      ingredient: "ingredientname1 object id",
      quantity: 200,
    },
    {
      ingredient: "ingredientname2 object id",
      quantity: 100,
    },
    // Add more ingredients as needed
  ],
  instructions: [
    "Cook spaghetti according to package directions.",
    "In a large skillet, cook the bacon until crispy. Remove bacon from skillet and set aside, leaving the drippings in the skillet.",
    "In the same skillet, add garlic and cook until fragrant.",
    "Add cooked spaghetti to the skillet and toss to combine with the garlic and drippings.",
    "Remove skillet from heat and quickly stir in beaten eggs, cooked bacon, and Parmesan cheese until the spaghetti is evenly coated.",
    "Serve immediately with additional Parmesan cheese and black pepper.",
  ],
  info: {
    cuisine: "Italian",
    type: "Main Dish",
    servings: 4,
    prepTime: 10,
    cookTime: 15,
    image: "spaghetti_carbonara.jpg",
  },
});

  // Sample recipes
Recipe.insert(sampleRecipe)
  .then(()=> conosle.log("sample recipe inserted successfully"))
  .catch((err)=>console.error(err));
  
  // Insert sample data into the database
  Ingredient.insertMany(ingredients)
    .then(() => console.log("Sample data inserted successfully"))
    .catch((err) => console.error(err));
  console.log("Database populated successfully");
});
