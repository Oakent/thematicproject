const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: { type: String, required: true },
  unit: { type: String, required: false },
  category: { type: String, required: false },
  allergens: { type: [String], required: false },
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
