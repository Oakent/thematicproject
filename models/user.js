const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Username: { type: String, required: true, minLength: 3, maxLength: 25 },
  Email: { type: String, required: true, minLength: 5, maxLength: 100 },
  Password: { type: String, required: true, minLength: 8, maxLength: 100 },
  Cupboard: {type: Schema.Types.ObjectId, required: true, ref:'Cupboard'}
});
module.exports = mongoose.model("User", UserSchema);
