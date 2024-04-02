const express = require("express");
const router = express.Router();

const cupboardController = require("../controllers/cupboardController");
const ingredientController = require("../controllers/ingredientController");
const recipeController = require("../controllers/recipeController");
const userController = require("../controllers/userController");

router.get("/register", userController.registerUserGet);
router.post("/register", userController.registerUserPost);
router.get("/login", userController.loginUserGet);
router.post("/login", userController.loginUserPost);
router.get("/user/profile", userController.userProfileGet);
router.put("/user/profile", userController.userProfileUpdate);

router.get("/cupboard", cupboardController.cupboardGet);
router.post("/cupboard", cupboardController.cupboardUpdate);

router.get("/ingredient/create", ingredientController.add_ingredient_get);
router.post("/ingredient/create", ingredientController.add_ingredient_post);
router.get("/ingredients", ingredientController.ingredientsGet);
router.get("/ingredients/:id", ingredientController.ingredientGetById);
router.put("/ingredients/:id", ingredientController.ingredientUpdate);
router.delete("/ingredients/:id", ingredientController.ingredientDelete);

router.get("/recipes", recipeController.recipesGet);
router.post("/recipes", recipeController.recipeCreate);
router.get("/recipes/:id", recipeController.recipeGetById);
router.put("/recipes/:id", recipeController.recipeUpdate);
router.delete("/recipes/:id", recipeController.recipeDelete);

console.log("routes are loaded");

module.exports = router;
