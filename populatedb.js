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

  name: "Ham Sandwich",
    ingredients: [
      {
        ingredient: "mustard object id",
        quantity: 10,
      },
      {
        ingredient: "mayonnaise object id",
        quantity: 10,
      },
      {
        ingredient: "white bread object id",
        quantity: 80,
      },
      {
        ingredient: "ham object id",
        quantity: 60,
      },
      {
        ingredient: "cheese object id",
        quantity: 50,
      },
      {
        ingredient: "egg object id",
        quantity: 60,
      },
      {
        ingredient: "milk object id",
        quantity: 30,
      },
      {
        ingredient: "butter object id",
        quantity: 30,
      },
    ],
    instructions: [
      "Mix the mustard and mayo in a small bowl, then spread over each slice of bread.",
      "Top one slice with the ham and cheese, then sandwich with the remaining slice of bread.",
      "Whisk the egg and milk in a wide, shallow bowl or dish.",
      "Soak the sandwich in the egg mixture, leaving for a few minutes on each side until all the egg has been absorbed by the bread.",
      "Melt the butter in a frying pan.",
      "When it is sizzling, add the sandwich and cook for 4-5 mins on each side until golden brown.",
      "If you have a sandwich or burger press, use this to weigh the sandwich down.",
      "If not, place a heavy lid on top to compress the sandwich and help melt the cheese.",
      "Cut in half to serve.",
    ],
    info: {
      cuisine: "Continental",
      type: "Main Dish",
      servings: 1,
      prepTime: 10,
      cookTime: 10,
      image: "ham_sandwich.jpg",
    },

    name: "Chocolate Fudge Cake",
    ingredients: [
      {
        ingredient: "sunflower oil object id",
        quantity: 150,
      },
      {
        ingredient: "flour object id",
        quantity: 175,
      },
      {
        ingredient: "cocoa powder object id",
        quantity: 70,
      },
      {
        ingredient: "baking soda object id",
        quantity: 5,
      },
      {
        ingredient: "sugar object id",
        quantity: 375,
      },
      {
        ingredient: "golden syrup object id",
        quantity: 30,
      },
      {
        ingredient: "egg object id",
        quantity: 2,
      },
      {
        ingredient: "milk object id",
        quantity: 200,
      },
      {
        ingredient: "butter object id",
        quantity: 100,
      },
    ],
    instructions: [
      "Heat the oven to 180C/160C fan/gas 4.",
      "Oil and line the base of two 18cm sandwich tins.",
      "Sieve the flour, cocoa powder and bicarbonate of soda into a bowl.",
      "Add the caster sugar and mix well.",
      "Make a well in the centre and add the golden syrup, eggs, sunflower oil and milk. ",
      "Beat well with an electric whisk until smooth.",
      "Pour the mixture into the two tins and bake for 25-30 mins until risen and firm to the touch.",
      "Remove from oven, leave to cool for 10 mins before turning out onto a cooling rack.",
      "To make the icing, beat the unsalted butter in a bowl until soft.",
      "Gradually sieve and beat in the icing sugar and cocoa powder, then add enough of the milk to make the icing fluffy and spreadable.",
      "Sandwich the two cakes together with the butter icing and cover the sides and the top of the cake with more icing.",
    ],
    info: {
      cuisine: "Continental",
      type: "Dessert",
      servings: 8,
      prepTime: 25,
      cookTime: 30,
      image: "chocolate_fudge_cake.jpg",
    },

    name: "Sweet Sour Chicken",
    ingredients: [
      {
        ingredient: "tomato ketchup object id",
        quantity: 135,
      },
      {
        ingredient: "vinegar object id",
        quantity: 45,
      },
      {
        ingredient: "sugar object id",
        quantity: 60,
      },
      {
        ingredient: "garlic clove object id",
        quantity: 20,
      },
      {
        ingredient: "chicken object id",
        quantity: 800,
      },
      {
        ingredient: "onion object id",
        quantity: 120,
      },
      {
        ingredient: "red pepper object id",
        quantity: 320,
      },
      {
        ingredient: "pineapple object id",
        quantity: 227,
      },
      {
        ingredient: "sugar snap peas object id",
        quantity: 100,
      },
    ],
    instructions: [
      "In a large microwaveable dish, mix the ketchup, vinegar, sugar and garlic thoroughly with the chicken, onion and peppers.",
      "Microwave, uncovered, on high for 8-10 mins until the chicken is starting to cook and the sauce is sizzling.",
      "Stir in the pineapple pieces and sugar snap peas and return to the microwave for another 3-5 mins until the chicken is completely cooked.",
      "Leave to stand for a few minutes, and serve.",
    ],
    info: {
      cuisine: "Oriental",
      type: "Main Dish",
      servings: 4,
      prepTime: 10,
      cookTime: 15,
      image: "sweet_sour_chicken.jpg",
    },

    name: "Fish Soup",
    ingredients: [
      {
        ingredient: "cooking oil object id",
        quantity: 15,
      },
      {
        ingredient: "onion object id",
        quantity: 170,
      },
      {
        ingredient: "garlic clove object id",
        quantity: 5,
      },
      {
        ingredient: "potato object id",
        quantity: 250,
      },
      {
        ingredient: "carrot object id",
        quantity: 250,
      },
      {
        ingredient: "pepper object id",
        quantity: 160,
      },
      {
        ingredient: "leek object id",
        quantity: 200,
      },
      {
        ingredient: "tomato object id",
        quantity: 15,
      },
      {
        ingredient: "vegetable stock object id",
        quantity: 1250,
      },
      {
        ingredient: "bay leaf object id",
        quantity: 5,
      },
      {
        ingredient: "dill object id",
        quantity: 10,
      },
      {
        ingredient: "fish fillet object id",
        quantity: 400,
      },
      {
        ingredient: "lemon object id",
        quantity: 60,
      },
    ],
    instructions: [
      "Heat the oil in a large saucepan over a medium heat and cook the onion for 5-7 mins until beginning to soften.",
      "Mix in the garlic, potatoes, carrots, peppers, leeks and tomato purée, and cook for 3-5 mins more.",
      "Pour in the vegetables and stir in the bay leaf.",
      "Bring to a simmer, then cover and cook for 15 mins until the veg is almost tender.",
      "Finely chop most of the dill, reserving a few whole sprigs.",
      "Cut the fish into bite-sized pieces and season with salt, pepper and a bit of the lemon juice.",
      "Add the fish to the soup along with a pinch of the lemon zest and the chopped dill.",
      "Simmer gently over a low heat for 5-7 mins until the fish is cooked through.",
      "Remove the bay leaf and season the soup to taste, adding more lemon juice or zest, if needed.",
      "Scatter over the reserved dill springs to serve.",
    ],
    info: {
      cuisine: "Seafood",
      type: "Main Dish",
      servings: 4,
      prepTime: 20,
      cookTime: 40,
      image: "fish_soup.jpg",
    },
});

  // Sample recipes
Recipe.create(sampleRecipe)
  .then(()=> conosle.log("sample recipe inserted successfully"))
  .catch((err)=>console.error(err));
  
  // Insert sample data into the database
  Ingredient.insertMany(ingredients)
    .then(() => console.log("Sample data inserted successfully"))
    .catch((err) => console.error(err));
  console.log("Database populated successfully");
});
