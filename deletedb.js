const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const config = require("./config");
const mongoURI = config.mongoURI;

async function deleteAll() {
  const uri =
    "mongodb+srv://oakent:aJhq8AJdURJUyf1y@thematicproj.9jc9drl.mongodb.net/?retryWrites=true&w=majority&appName=ThematicProj";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("test");
    const recipes = database.collection("recipes");
    const ingredients = database.collection("ingredients");
    const users = database.collection("users");
    const resultUsers = await users.deleteMany({});
    const resultRecipes = await recipes.deleteMany({});
    const resultIngredients = await ingredients.deleteMany({});
  } finally {
    await client.close();
  }
}

deleteAll();
