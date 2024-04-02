const express = require("express");
const asyncHandler = require("express-async-handler");
const Ingredient = require("../models/ingredient");

exports.ingredientsGet = asyncHandler(async (req, res) => {
  res.send("not implemented, ingredients get");
});

exports.add_ingredient_get = asyncHandler(async (req, res, next) => {
  res.render("add_ingredient");
});

exports.add_ingredient_post = asyncHandler(async (req, res, next) => {
  const ingredient = new Ingredient({
    name: req.body.name,
    unit: req.body.unit,
    category: req.body.category,
    allergens: req.body.allergens,
  });
  await ingredient.save();
});

exports.ingredientGetById = asyncHandler(async (req, res, next) => {
  res.send("not implemented, ingredient get by id");
});

exports.ingredientUpdate = asyncHandler(async (req, res, next) => {
  res.send("not implemented, ingredient update");
});

exports.ingredientDelete = asyncHandler(async (req, res, next) => {
  res.send("not implemented, ingredient delete");
});
