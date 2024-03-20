const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Username: { type: String, required: true, minLength: 3, maxLength: 25 },
  Email: { type: String, required: true, minLength: 5, maxLength: 100 },
  Password: { type: String, required: true, minLength: 8, maxLength: 100 },
 
  personalIngredients: [{
    type: Object,
    Name: { type: String, required: true },
    Unit: { type: String, required: true },
    Category: { type: String, required: true },
    Allergens: { type: String, required: true }
  }]
});



module.exports = mongoose.model("User", UserSchema);
