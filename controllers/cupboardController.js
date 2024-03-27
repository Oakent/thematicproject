const Cupboard = require("../models/cupboard");
const asyncHandler = require("express-async-handler");

exports.cupboardGet = asyncHandler(async (req, res) => {
  res.send("not implemented, get cupboard");
});

exports.cupboardUpdate = asyncHandler(async (req, res) => {
  res.send("not implemented, update cupboard");
});
