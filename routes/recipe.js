const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const cupboardController = require("../controllers/cupboardController");
const ingredientController = require("../controllers/ingredientController");
const recipeController = require("../controllers/recipeController");
const userController = require("../controllers/userController");

//user authentication middleware
const authenticateUser = require("../middleware/authenticateUser");
const viableRecipeController = require("../controllers/viableRecipeController");

router.get("/register", userController.registerUserGet);
router.post("/register", userController.registerUserPost);
router.get("/login", userController.loginUserGet);
router.post("/login", userController.loginUserPost);
router.get("/user/profile", userController.userProfileGet);
router.put("/user/profile", userController.userProfileUpdate);

router.get("/cupboard", userController.cupboardGet);
router.post("/cupboard", userController.cupboardPost);

router.get("/ingredient/create", ingredientController.add_ingredient_get);
router.post("/ingredient/create", ingredientController.add_ingredient_post);
router.get("/ingredients", ingredientController.ingredientsGet);
router.get("/ingredients/:id", ingredientController.ingredientGetById);
router.put("/ingredients/:id", ingredientController.ingredientUpdate);
router.delete("/ingredients/:id", ingredientController.ingredientDelete);

router.get("/recipes", recipeController.recipesGet);
router.get("/recipes/create", recipeController.recipe_create_get);
router.post("/recipes/create", recipeController.recipe_create_post);
router.get("/recipes/:id", recipeController.recipeGetById);
router.put("/recipes/:id", recipeController.recipeUpdate);
router.delete("/recipes/:id", recipeController.recipeDelete);

/*
router.get("/viableRecipes", recipeController.viableRecipesGet);
router.post("/viableRecipes", recipeController.viableRecipePost);
router.get("/viableRecipes/:id", recipeController.viableRecipeGetById);
router.post("/viableRecipes/:id", recipeController.viableRecipePost);
*/

// user authentication middleware
// router.get('/viable-recipes', authenticateUser, viableRecipeController.getUserIngredients);
// router.post('/viable-recipes', authenticateUser, viableRecipeController.addUserIngredient);

console.log("routes are loaded");

module.exports = router;
