const express = require("express");
const asyncHandler = require("express-async-handler");

exports.getRecipes = asyncHandler(async (req, res) => {
  res.send("not implemented, get all recipes");
});

exports.getRecipeById = asyncHandler(async (req, res) => {
  res.send("not implemented, get recipe by id");
});

exports.createRecipe = asyncHandler(async (req, res) => {
  res.send("not implemented, create recipe");
});

exports.updateRecipe = asyncHandler(async (req, res) => {
  res.send("not implemented, update recipe");
});

exports.deleteRecipe = asyncHandler(async (req, res) => {
  res.send("not implemented, delete recipe");
});
