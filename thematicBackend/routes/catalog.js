const express = require("express");
const router = express.Router();

const cupboard_controller = require("../controllers/cupboardController");
const ingredient_controller = require("../controllers/ingredientController");
const recipe_controller = require("../controllers/recipeController");
const user_controller = require("../controllers/userController");

//ingredient routes
router.get("/ingredients", ingredient_controller.getIngredients);
router.get("/ingredients/:id", ingredient_controller.getIngredientById);
router.post("/ingredients/create", ingredient_controller.createIngredient);
router.put("/ingredients/:id", ingredient_controller.updateIngredient);
router.delete("/ingredients/:id", ingredient_controller.deleteIngredient);

//recipe routes
router.get("/recipes", recipe_controller.getRecipes);
router.get("/recipes/:id", recipe_controller.getRecipeById);
router.post("/recipes", recipe_controller.createRecipe);
router.put("/recipes/:id", recipe_controller.updateRecipe);
router.delete("/recipes/:id", recipe_controller.deleteRecipe);

//cupboard routes
router.get("/cupboard", cupboard_controller.getCupboard);
router.post("/cupboard", cupboard_controller.createCupboard);
router.put("/cupboard", cupboard_controller.updateCupboard);
router.delete("/cupboard", cupboard_controller.deleteCupboard);

//user routes
router.post("/register", user_controller.registerUser);
router.post("/login", user_controller.loginUser);
router.put("/user/ingredients", user_controller.updateIngredients);

module.exports = router;
