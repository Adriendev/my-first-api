const { response } = require("express");
const router = require("express").Router();
const User = require("../models/user.models.js");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const saltRounds = 10;



// Get all users
router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
