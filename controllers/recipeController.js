const express = require("express");
const asyncHandler = require("express-async-handler");
const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

exports.recipesGet = asyncHandler(async (req, res, next) => {
  const allRecipes = await Recipe.find({}).sort({ title: 1 }).exec();
  console.log("all recipes recipe controller: " + allRecipes);
  res.render("recipes", { recipes: allRecipes });
});

exports.recipe_create_get = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe create get");
});

exports.recipe_create_post = asyncHandler(async (req, res, next) => {
  res.send("not implemented, recipe create post");
});

const populateIngredients = async (recipe) => {
  const ingredientIds = recipe.ingredients.map((ingredient) => ingredient._id);

  if (!ingredientIds.length) {
    console.log("No ingredients found for this recipe.");
    recipe.noIngredients = true;
    return recipe;
  }

  try {
    const ingredients = await Ingredient.find({
      _id: { $in: ingredientIds },
    }).select("name unit");

    recipe.populatedIngredients = recipe.ingredients
      .map((originalIngredient) => {
        const matchingIngredient = ingredients.find((ingredient) =>
          ingredient._id.equals(originalIngredient._id)
        );

        if (matchingIngredient) {
          // Modify the originalIngredient object
          return {
            quantity: originalIngredient.quantity,
            ingredient: {
              name: matchingIngredient.name,
              unit: matchingIngredient.unit,
            },
          };
        } else {
          return null; // or handle the case where the ingredient is not found
        }
      })
      .filter(Boolean); // Remove any null entries from the array

    return recipe;
  } catch (error) {
    console.error("Error populating ingredients:", error);
    throw error;
  }
};

exports.recipeGetById = asyncHandler(async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    const populatedRecipe = await populateIngredients(recipe);

    res.render("recipe_page", { recipe: populatedRecipe });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(404).send("Recipe not found");
  }
});

exports.recipeUpdate = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe update");
});

exports.recipeDelete = asyncHandler(async (req, res) => {
  res.send("not implemented, recipe delete");
});
