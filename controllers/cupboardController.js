const Cupboard = require("../models/cupboard");
const Ingredients = require("../models/ingredient");
const asyncHandler = require("express-async-handler");

exports.cupboardGet = asyncHandler(async (req, res) => {
  const allIngredients = await Ingredients.find().exec();
  res.render("cupboardUpdate", allIngredients);
});

exports.cupboardUpdate = asyncHandler(async (req, res) => {});
