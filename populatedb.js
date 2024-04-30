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
  ];

  const recipe1 = new Recipe({
  name: "Spaghetti Carbonara",
  ingredients: [
    {
      ingredient: "66297d024aa6f32fa0389ea0",
      quantity: 200,
    },
    {
      ingredient: "66146c636ba443c4e4997ded",
      quantity: 100,
    },
    {
      ingredient: "662feee2329efd208bcfacc1",
      quantity: 50,
    },
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
    image: "SpaghettiCarbonara.jpg",
  },
});

const sampleRecipe = [recipe1]

  // Sample recipes
Recipe.create(sampleRecipe)
  .then(()=> conosle.log("sample recipe inserted successfully"))
  .catch((err)=>console.error(err));
  
  // Insert sample data into the database
  Ingredient.insertMany(sampleRecipe)
    .then(() => console.log("Sample data inserted successfully"))
    .catch((err) => console.error(err));
  console.log("Database populated successfully");
});
