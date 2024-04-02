const express = require("express");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const saltRounds = 10; // The cost factor for hashing

exports.index = asyncHandler(async (req, res) => {
  res.send("not implemented, index");
});

exports.registerUserGet = asyncHandler(async (req, res) => {
  res.render("sign_up");
});

exports.registerUserPost = asyncHandler(async (req, res, next) => {
  try {
    const Email = req.body.email;
    const existingUser = await User.findOne({ Email }); // Ensure field names are lowercase if your model defines them that way
    if (existingUser) {
      console.log("User with this email already exists");
      throw new Error("User with this email already exists");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      Username: req.body.username,
      Email: Email,
      Password: hashedPassword,
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
