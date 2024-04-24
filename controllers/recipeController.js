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
  const cuisines = await Recipe.distinct("info.cuisine");
  const dishTypes = await Recipe.distinct("info.type");
  const ingredients = await Ingredient.find({}).sort({ name: 1 }).exec();
  res.render("add_recipe", { cuisines, dishTypes, ingredients });
});

exports.recipe_create_post = asyncHandler(async (req, res, next) => {
  console.log("req.body: ", req.body); // Log the request body for inspection

  // Check for missing 'name' field
  if (!req.body.name) {
    return res.status(400).send("Missing required field: name");
  }

  // Check if 'ingredientsData' field exists
  if (!req.body.ingredientsData) {
    return res.status(400).send("Missing required field: ingredientsData");
  }

  const ingredientsData = JSON.parse(req.body.ingredientsData);

  const ingredients = ingredientsData.map((ingredient) => {
    return {
      _id: ingredient._id,
      quantity: ingredient.quantity,
    };
  });

  const recipe = new Recipe({
    title: req.body.name,
    info: {
      cuisine: req.body.cuisine,
      type: req.body.type,
      servings: req.body.servings,
      time: req.body.time,
    },
    ingredients,
    instructions: req.body.instructions,
  });

  try {
    await recipe.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).send("Error saving recipe");
  }
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
