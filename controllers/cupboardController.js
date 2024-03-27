const Cupboard = require("../models/cupboard");
const asyncHandler = require("express-async-handler");

exports.getCupboardByUser = asyncHandler(async (req, res) => {
  res.send("not implemented, get cupboard by id");
});

exports.createCupboard = asyncHandler(async (req, res) => {
  res.send("not implemented, create cupboard");
});

exports.updateCupboard = asyncHandler(async (req, res) => {
  res.send("not implemented, update cupboard");
});

exports.deleteCupboard = asyncHandler(async (req, res) => {
  res.send("not implemented, delete cupboard");
});
