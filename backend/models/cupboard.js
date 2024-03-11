const mongoose = require("mongoose");
const { userSchema } = require("./user");
const { ingredientSchema } = require("./ingredient");

const Schema = mongoose.Schema;

const CupboardSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});

module.exports = mongoose.model("Cupboard", CupboardSchema);
