const express = require("express");
const router = express.Router();

const cupboard_controller = require("../controllers/cupboardController");
const ingredient_controller = require("../controllers/ingredientController");
const recipe_controller = require("../controllers/recipeController");
const user_controller = require("../controllers/userController");

//user routes
router.get("/", user_controller.index);

router.get("/register", user_controller.registerUserGet);
router.post("/register", user_controller.registerUserPost);

router.get("/login", user_controller.loginUserGet);
router.post("/login", user_controller.loginUserPost);

router.put("/user/ingredients", user_controller.updateIngredients);

console.log("loading ingredient routes");
router.get("/ingredients", ingredient_controller.getIngredients);
router.get("/ingredients/:id", ingredient_controller.getIngredientById);
router.post("/ingredients/create", ingredient_controller.createIngredient);
router.put("/ingredients/:id", ingredient_controller.updateIngredient);
router.delete("/ingredients/:id", ingredient_controller.deleteIngredient);

console.log("loading recipe routes");
router.get("/recipes", recipe_controller.getRecipes);
router.get("/recipes/:id", recipe_controller.getRecipeById);
router.post("/recipes", recipe_controller.createRecipe);
router.put("/recipes/:id", recipe_controller.updateRecipe);
router.delete("/recipes/:id", recipe_controller.deleteRecipe);

console.log("loading cupboard routes");
router.get("/cupboard", cupboard_controller.getCupboardByUser);
router.post("/cupboard", cupboard_controller.createCupboard);
router.put("/cupboard", cupboard_controller.updateCupboard);
router.delete("/cupboard", cupboard_controller.deleteCupboard);

console.log("routes are loaded");

module.exports = router;
