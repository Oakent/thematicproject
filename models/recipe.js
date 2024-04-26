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
        required: true,
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
    prepTime: {
      type: Number,
      required: true,
    },
    cookTime: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
});

RecipeSchema.virtual("url").get(function () {
  return "/recipes/" + this._id;
});

module.exports = mongoose.model("Recipe", RecipeSchema);
