const express = require("express");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Ingredient = require("../models/ingredient");
const Recipe = require("../models/recipe");
const saltRounds = 10; // The cost factor for hashing

exports.index = asyncHandler(async (req, res) => {
  res.send("not implemented, index");
});

exports.cupboardPost = asyncHandler(async (req, res, next) => {
  console.log("cupboard post");
  const ingredient_names = req.body.ingredient_names;

  let err = "";

  if (!ingredient_names || ingredient_names.length === 0) {
    err = "Error: No ingredients selected";
    res.render("cupboard_err", { errMsg: err });
  }
  console.log(ingredient_names);

  // 1. Get Ingredient ObjectIds based on names
  const ingredientIds = await Ingredient.find({
    name: { $in: ingredient_names },
  }).select("_id");

  console.log(ingredientIds);

  // 2. Iterate through recipes and filter based on ingredient ObjectIds
  const userRecipes = [];
  for await (const recipe of await Recipe.find({})) {
    const hasAllIngredients = recipe.ingredients.every((recipeIngredient) => {
      return ingredientIds.some((userIngredientId) =>
        userIngredientId._id.equals(recipeIngredient._id)
      );
    });
    if (hasAllIngredients) {
      userRecipes.push(recipe);
    }
  }

  // 3. Handle no recipes found scenario
  if (userRecipes.length === 0) {
    err = "Error: no recipes found";
    res.render("cupboard_err", { errMsg: err });
  }

  res.render("recipes", { recipes: userRecipes });
});

exports.registerUserGet = asyncHandler(async (req, res) => {
  res.render("sign_up");
});

exports.registerUserPost = asyncHandler(async (req, res, next) => {
  try {
    const Email = req.body.email;
    const existingUser = await User.findOne({ Email }); // Ensure field names are lowercase if your model defines them that way
    if (existingUser) {
      console.log("User with this email already exists");
      throw new Error("User with this email already exists");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      Username: req.body.username,
      Email: Email,
      Password: hashedPassword,
      cupboard: [],
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

exports.loginUserGet = asyncHandler(async (req, res, next) => {
  res.render("login");
});

exports.loginUserPost = asyncHandler(async (req, res, next) => {
  try {
    const Email = req.body.email;
    const Password = req.body.password;
    // Find the user with the given email
    const user = await User.findOne({ Email });
    if (!user) {
      throw new Error("User with this email does not exist");
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(Password, user.Password);
    if (!passwordMatch) {
      throw new Error("Incorrect password");
    }

    console.log("User logged in:", user);
    res.send("User logged in");
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

exports.userProfileGet = asyncHandler(async (req, res, next) => {
  res.send("not implemented, user profile get");
});

exports.userProfileUpdate = asyncHandler(async (req, res, next) => {
  res.send("not implemented, user profile update");
});

exports.cupboardGet = asyncHandler(async (req, res, next) => {
  const ingredient = await Ingredient.find({}).exec();
  res.render("edit_cupboard", { ingredients: ingredient });
});
