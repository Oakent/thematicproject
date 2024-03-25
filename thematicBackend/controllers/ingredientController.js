const express = require("express");
const asyncHandler = require("express-async-handler");

const getIngredients = asyncHandler(async (req, res) => {
  res.send("not implemented, get all ingredients");
});

const getIngredientById = asyncHandler(async (req, res) => {
  res.send("not implemented, get ingredient by id");
});

const createIngredient = asyncHandler(async (req, res) => {
  res.send("not implemented, create ingredient");
});

const updateIngredient = asyncHandler(async (req, res) => {
  res.send("not implemented, update ingredient");
});

const deleteIngredient = asyncHandler(async (req, res) => {
  res.send("not implemented, delete ingredient");
});
