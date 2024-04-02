const express = require("express");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res) => {
  res.send("not implemented, index");
});

exports.registerUserGet = asyncHandler(async (req, res) => {
  res.render("sign_up");
});

exports.registerUserPost = asyncHandler(async (req, res, next) => {
  try {
    const user = new User({
      Username: req.body.username,
      Email: req.body.email,
      Password: req.body.password,
      cupboard: [],
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

exports.loginUserGet = asyncHandler(async (req, res, next) => {
  res.send("not implemented, login user get");
});

exports.loginUserPost = asyncHandler(async (req, res, next) => {
  res.send("not implemented, login user post");
});

exports.userProfileGet = asyncHandler(async (req, res, next) => {
  res.send("not implemented, user profile get");
});

exports.userProfileUpdate = asyncHandler(async (req, res, next) => {
  res.send("not implemented, user profile update");
});
