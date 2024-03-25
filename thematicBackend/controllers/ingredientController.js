const express = require("express");
const asyncHandler = require("express-async-handler");

exports.getIngredients = asyncHandler(async (req, res) => {
  res.send("not implemented, get all ingredients");
});

exports.getIngredientById = asyncHandler(async (req, res) => {
  res.send("not implemented, get ingredient by id");
});

exports.createIngredient = asyncHandler(async (req, res) => {
  res.send("not implemented, create ingredient");
});

exports.updateIngredient = asyncHandler(async (req, res) => {
  res.send("not implemented, update ingredient");
});

exports.deleteIngredient = asyncHandler(async (req, res) => {
  res.send("not implemented, delete ingredient");
});
