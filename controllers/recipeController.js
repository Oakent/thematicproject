const express = require("express");
const asyncHandler = require("express-async-handler");

exports.recipesGet = asyncHandler(async (req, res) => {
  const allRecipes = await Recipe.find({}).sort({ title: 1 }).exec();
  res.render("recipes", { recipes: allRecipes });
});

exports.recipeCreate = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe create");
});

exports.recipeGetById = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe get by id");
});

exports.recipeUpdate = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe update");
});

exports.recipeDelete = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe delete");
});
