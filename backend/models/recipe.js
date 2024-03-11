const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ingredientSchema } = require("./ingredient");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: "Ingredient",
      },
      quantity: { type: Number, required: true },
    },
  ],
  instructions: [String],
  info: {
    cuisine: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    servings: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);