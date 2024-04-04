const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

exports.getUserIngredients = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).populate('ingredients');
  
  if (!user) {
    return res.status(404).send('User not found');
  }


  const userIngredients = user.ingredients;

  const viableRecipes = await Recipe.find({
    ingredients: { $all: userIngredients }
  });

  res.json(viableRecipes);
});