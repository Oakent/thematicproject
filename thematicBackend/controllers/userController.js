const express = require("express");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.send("not implemented, register user");
});

const loginUser = asyncHandler(async (req, res) => {
  res.send("not implemented, login user");
});

const updateIngredients = asyncHandler(async (req, res) => {
  res.send("not implemented, update ingredients");
});
