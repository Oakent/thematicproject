const express = require("express");
const user_controller = require("../controllers/userController");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res) => {
  res.send("not implemented, index");
});

exports.registerUserGet = asyncHandler(async (req, res) => {
  res.send("not implemented, register user get");
});

exports.registerUserPost = asyncHandler(async (req, res, next) => {
  res.send("not implemented, register user post");
});

exports.loginUserGet = asyncHandler(async (req, res, next) => {
  res.send("not implemented, login user get");
});

exports.loginUserPost = asyncHandler(async (req, res, next) => {
  res.send("not implemented, login user post");
});

exports.updateIngredients = asyncHandler(async (req, res, next) => {
  res.send("not implemented, update ingredients");
});
