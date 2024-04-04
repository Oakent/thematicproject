const express = require("express");
const asyncHandler = require("express-async-handler");
const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

exports.recipesGet = asyncHandler(async (req, res, next) => {
  const allRecipes = await Recipe.find({}).sort({ title: 1 }).exec();
  console.log("all recipes recipe controller: " + allRecipes);
  res.render("recipes", { recipes: allRecipes });
});

exports.recipeCreate = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe create");
});

exports.recipeGetById = asyncHandler(async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
      .populate({
        path: "ingredients",
        populate: {
          path: "ingredient",
          model: "Ingredient",
          select: "name unit",
        },
      })
      .exec();

    console.log("recipe: " + recipe);

    await Promise.all(
      recipe.ingredients.map(async (ingredient) => {
        if (!ingredient.ingredient) {
          await recipe
            .populate("ingredients." + ingredient._id + ".ingredient")
            .execPopulate();
        }
      })
    );

    recipe.ingredients.forEach((recipeIngredient) => {
      if (recipeIngredient && recipeIngredient.ingredient) {
        const ingredient = recipeIngredient.ingredient;
        console.log("Ingredient:", ingredient);
        console.log("unit:", ingredient.unit);
        console.log("name:", ingredient.name);
      } else {
        console.log("Ingredient information missing");
      }
    });
    res.render("recipe_page", { recipe: recipe });
  } catch (err) {
    console.log("error: " + err);
    res.status(404).send("Recipe not found");
  }
});

console.log();
exports.recipeUpdate = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe update");
});

exports.recipeDelete = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe delete");
});
