const express = require("express");
const asyncHandler = require("express-async-handler");

const getRecipes = asyncHandler(async (req, res) => {
  res.send("not implemented, get all recipes");
});

const getRecipeById = asyncHandler(async (req, res) => {
  res.send("not implemented, get recipe by id");
});

const createRecipe = asyncHandler(async (req, res) => {
  res.send("not implemented, create recipe");
});

const updateRecipe = asyncHandler(async (req, res) => {
  res.send("not implemented, update recipe");
});

const deleteRecipe = asyncHandler(async (req, res) => {
  res.send("not implemented, delete recipe");
});
