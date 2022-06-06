const { response } = require("express");
const router = require("express").Router();
const User = require("../models/user.models.js");

// create user
router.post("/", async (req, res, next) => {
  try {
    const addUser = await User.create(req.body);
    res.status(201).json({ message: `New User created:`, addUser });
  } catch (err) {
    next(err);
  }
});

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
