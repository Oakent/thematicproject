const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

async function deleteAll() {
  const uri =
    "mongodb+srv://oakent:aJhq8AJdURJUyf1y@thematicproj.9jc9drl.mongodb.net/?retryWrites=true&w=majority&appName=ThematicProj";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("recipeFinder");
    const recipes = database.collection("recipes");
    const users = database.collection("users");
    const cupboard = database.collection("cupboard");
    const resultUsers = await users.deleteMany({});
    const resultRecipes = await recipes.deleteMany({});
    const resultCupboard = await cupboard.deleteMany({});
    console.log(`Document deleted with ID: ${resultUsers.deletedId}`);
    console.log(`Document deleted with ID: ${resultRecipes.deletedId}`);
    console.log(`Document deleted with ID: ${resultCupboard.deletedId}`);
  } finally {
    await client.close();
  }
}

async function insertUser() {
  const uri =
    "mongodb+srv://oakent:aJhq8AJdURJUyf1y@thematicproj.9jc9drl.mongodb.net/?retryWrites=true&w=majority&appName=ThematicProj";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("recipeFinder");
    const collection = database.collection("users");

    const newUser = {
      Username: "user",
      Password: "password",
    };

    const result = await collection.insertOne(newUser);
    console.log(`Document inserted with ID: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

async function insertCupboard() {
  const uri =
    "mongodb+srv://oakent:aJhq8AJdURJUyf1y@thematicproj.9jc9drl.mongodb.net/?retryWrites=true&w=majority&appName=ThematicProj";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("recipeFinder");
    const collection = database.collection("cupboard");

    const newCupboard = {
      userID: "65e905f00e6848daf04f95b5",
      Ingredients: {
        tofu: 2,
        gochujang: "1 tbsp",
        soysauce: 1,
        "sesame oil": 1,
        garlic: 1,
        ginger: 1,
        "green onion": 1,
        onion: 1,
        carrot: 1,
        zucchini: 1,
        mushroom: 1,
        potato: 1,
        water: 1,
        sugar: 1,
        "black pepper": 1,
        "sesame seed": 1,
      },
    };

    const result = await collection.insertOne(newCupboard);
    console.log(`Document inserted with ID: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

async function insertRecipe() {
  const uri =
    "mongodb+srv://oakent:aJhq8AJdURJUyf1y@thematicproj.9jc9drl.mongodb.net/?retryWrites=true&w=majority&appName=ThematicProj";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("recipeFinder");
    const collection = database.collection("recipes");

    const newRecipe = {
      Name: "braised tofu",
      Ingredients: {
        firmtofu: 200,
        gochujang: "2tbsp",
        soysauce: 2,
        "sesame oil": 1,
        garlic: 2,
        ginger: 1,
        "green onion": 1,
        onion: 1,
        carrot: 1,
        zucchini: 1,
        mushroom: 1,
        potato: 1,
        water: 1,
        sugar: 1,
        "black pepper": 1,
        "sesame seed": 1,
      },
      Instructions: [
        "Cut tofu into 1 inch cubes and set aside.",
        "In a small bowl, mix together gochujang, soy sauce, and sesame oil. Set aside.",
        "In a large pot, heat 1 tablespoon of oil over medium high heat. Add garlic, ginger, and green onion and cook until fragrant, about 1 minute.",
        "Add onions and cook until translucent, about 2 minutes.",
        "Add carrots, zucchini, mushrooms, and potatoes and cook for 5 minutes.",
        "Add tofu and cook for 5 minutes.",
        "Add water, sugar, and black pepper. Bring to a boil and reduce heat to low. Simmer for 20 minutes.",
        "Stir in the gochujang mixture and cook for 5 minutes.",
        "Garnish with sesame seeds and serve with rice.",
      ],
      info: {
        cuisine: "Korean",
        type: "Main",
        servings: 4,
        time: 40,
      },
    };

    console.log("inserted: " + newRecipe.Name);

    const result = await collection.insertOne(newRecipe);
    console.log(`Document inserted with ID: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

function insertData() {
  insertUser();
  insertCupboard();
  insertRecipe();
}
// add function to user's cupboard via userID

insertData();
