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
  const ingredients = [];

  const sampleRecipe = new Recipe({
    name: "Spaghetti Carbonara",
    ingredients: [
      {
        _id: "ingredientname1 object id",
        quantity: 200,
      },
      {
        _id: "ingredientname2 object id",
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
  const ham_sandwich = new Recipe({
    name: "Ham Sandwich",
    ingredients: [
      {
        _id: "662e53fefda19ac89fc0636d",
        quantity: 10,
      },
      {
        _id: "66146c636ba443c4e4997df9",
        quantity: 10,
      },
      {
        _id: "662e5472fda19ac89fc06373",
        quantity: 80,
      },
      {
        _id: "662e54a9fda19ac89fc06377",
        quantity: 60,
      },
      {
        _id: "66146c636ba443c4e4997ded",
        quantity: 50,
      },
      {
        _id: "662e552ffda19ac89fc06382",
        quantity: 60,
      },
      {
        _id: "66146c636ba443c4e4997deb",
        quantity: 30,
      },
      {
        _id: "66297db2f6ef533ec7744f8b",
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
  });
  const chocolate_fudge_cake = new Recipe({
    name: "Chocolate Fudge Cake",
    ingredients: [
      {
        _id: "662e5605fda19ac89fc0638c",
        quantity: 150,
      },
      {
        _id: "662e5625fda19ac89fc06390",
        quantity: 175,
      },
      {
        _id: "662e5644fda19ac89fc06394",
        quantity: 70,
      },
      {
        _id: "662e5662fda19ac89fc06398",
        quantity: 5,
      },
      {
        _id: "662e5686fda19ac89fc0639c",
        quantity: 375,
      },
      {
        _id: "662e56b6fda19ac89fc063a0",
        quantity: 30,
      },
      {
        _id: "662e552ffda19ac89fc06382",
        quantity: 2,
      },
      {
        _id: "66146c636ba443c4e4997deb",
        quantity: 200,
      },
      {
        _id: "66297db2f6ef533ec7744f8b",
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
  });
  const sweet_sour_chicken = new Recipe({
    name: "Sweet Sour Chicken",
    ingredients: [
      {
        _id: "662e5738fda19ac89fc063ad",
        quantity: 135,
      },
      {
        _id: "662e575efda19ac89fc063b1",
        quantity: 45,
      },
      {
        _id: "662e5686fda19ac89fc0639c",
        quantity: 60,
      },
      {
        _id: "662feee2329efd208bcfacc1",
        quantity: 20,
      },
      {
        _id: "66146c636ba443c4e4997de9",
        quantity: 800,
      },
      {
        _id: "662e57fdfda19ac89fc063bf",
        quantity: 120,
      },
      {
        _id: "662e5824fda19ac89fc063c3",
        quantity: 320,
      },
      {
        _id: "66297d3d5b2f8d97b40a61c4",
        quantity: 227,
      },
      {
        _id: "662e5874fda19ac89fc063ca",
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
  });
  const fish_soup = new Recipe({
    name: "Fish Soup",
    ingredients: [
      {
        _id: "662e58b2fda19ac89fc063ce",
        quantity: 15,
      },
      {
        _id: "662e57fdfda19ac89fc063bf",
        quantity: 170,
      },
      {
        _id: "662feee2329efd208bcfacc1",
        quantity: 5,
      },
      {
        _id: "662e5909fda19ac89fc063d5",
        quantity: 250,
      },
      {
        _id: "66297db2f6ef533ec7744f8a",
        quantity: 250,
      },
      {
        _id: "662e5937fda19ac89fc063dc",
        quantity: 160,
      },
      {
        _id: "662e595afda19ac89fc063e0",
        quantity: 200,
      },
      {
        _id: "662e5978fda19ac89fc063e4",
        quantity: 15,
      },
      {
        _id: "662e5995fda19ac89fc063e8",
        quantity: 1250,
      },
      {
        _id: "662e59bffda19ac89fc063ec",
        quantity: 5,
      },
      {
        _id: "662e59e4fda19ac89fc063f0",
        quantity: 10,
      },
      {
        _id: "662e5a10fda19ac89fc063f4",
        quantity: 400,
      },
      {
        _id: "662e5a25fda19ac89fc063f8",
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
  sample_recipes = [
    ham_sandwich,
    chocolate_fudge_cake,
    sweet_sour_chicken,
    fish_soup,
  ];
  // Sample recipes
  Recipe.insertMany(sample_recipes)
    .then(() => conosle.log("sample recipe inserted successfully"))
    .catch((err) => console.error(err));

  // Insert sample data into the database
  Ingredient.insertMany(ingredients)
    .then(() => console.log("Sample data inserted successfully"))
    .catch((err) => console.error(err));
  console.log("Database populated successfully");
});
