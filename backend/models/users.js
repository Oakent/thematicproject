const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: String,
  Password: String,
});

module.exports = mongoose.model("userModel", userSchema);

