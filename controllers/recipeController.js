const express = require("express");
const asyncHandler = require("express-async-handler");

exports.recipesGet = asyncHandler(async (req, res) => {
  res.send("not implemented, recipes get");
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
