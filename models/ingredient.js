const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: { type: String, required: true },
  unit: { type: String, required: false, default: "g" },
  category: { type: String, required: false, default: "other" },
  allergens: { type: [String], required: false, default: ["unknown"] },
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
