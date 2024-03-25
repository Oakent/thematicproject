const Cupboard = require("../models/cupboard");
const asyncHandler = require("express-async-handler");

const getAllCupboards = asyncHandler(async (req, res) => {
  res.send("not implemented, get all cupboards");
});

const getCupboardById = asyncHandler(async (req, res) => {
  res.send("not implemented, get cupboard by id");
});

const createCupboard = asyncHandler(async (req, res) => {
  res.send("not implemented, create cupboard");
});

const updateCupboard = asyncHandler(async (req, res) => {
  res.send("not implemented, update cupboard");
});

const deleteCupboard = asyncHandler(async (req, res) => {
  res.send("not implemented, delete cupboard");
});
