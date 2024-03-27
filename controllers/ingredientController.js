const express = require("express");
const asyncHandler = require("express-async-handler");

exports.ingredientsGet = asyncHandler(async (req, res) => {
  res.send("not implemented, ingredients get");
});

exports.ingredientCreate = asyncHandler(async (req, res) => {
  res.send("not implemented, ingredient create");
});

exports.ingredientGetById = asyncHandler(async (req, res) => {
  res.send("not implemented, ingredient get by id");
});

exports.ingredientUpdate = asyncHandler(async (req, res) => {
  res.send("not implemented, ingredient update");
});

exports.ingredientDelete = asyncHandler(async (req, res) => {
  res.send("not implemented, ingredient delete");
});
