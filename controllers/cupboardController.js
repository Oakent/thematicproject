const User = require("../models/user");
const Ingredients = require("../models/ingredient");
const asyncHandler = require("express-async-handler");

exports.cupboardGet = asyncHandler(async (req, res) => {
  const allIngredients = await Ingredients.find().exec();
  res.render("cupboard", { ingredients: allIngredients });
});

exports.cupboardUpdate = asyncHandler(async (req, res) => {});
