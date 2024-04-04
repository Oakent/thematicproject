const express = require("express");
const asyncHandler = require("express-async-handler");
const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

exports.recipesGet = asyncHandler(async (req, res, next) => {
  const allRecipes = await Recipe.find({}).sort({ title: 1 }).exec();
  console.log("all recipes recipe controller: " + allRecipes);
  res.render("recipes", { recipes: allRecipes });
});

exports.recipeCreate = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe create");
});

exports.recipeGetById = asyncHandler(async (req, res, next) => {
  console.log("body id:" + req.params.id);
  const recipe = await Recipe.findById(req.params.id)
    .populate("ingredients.ingredient")
    .exec();
  console.log(recipe.ingredients);
  console.log("unit " + recipe.ingredients.ingredient.unit);
  console.log("ingredient name " + recipe.ingredients.ingredient.name);
  console.log("test");
  res.render("recipe_page", { recipe: recipe });
});

console.log();
exports.recipeUpdate = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe update");
});

exports.recipeDelete = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe delete");
});
