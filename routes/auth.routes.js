const { response } = require("express");
const router = require("express").Router();
const User = require("../models/user.models.js");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const { jsonp } = require("express/lib/response");
const saltRounds = 10;

// create user
router.post("/signup", async (req, res, next) => {
  try {
    const { name, age, password } = req.body;

    const foundUser = await User.findOne({ name });
    if (foundUser) {
      res
        .status(401)
        .json({ message: "Username already exists. Try another username!" });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(hashedPassword);

    const addUser = await User.create({ name, age, password: hashedPassword });
    res.status(201).json({ message: `New User created:`, addUser });
  } catch (err) {
    next(err);
  }
});

//  Logging the user

router.post("/login", async (req, res, next) => {
  const { name, password } = req.body;
  const foundUser = await User.findOne({ name });

  if (!foundUser) {
    res.status(404).json({ message: "username does not exist" });
    return;
  }
  const isPasswordMatched = await bcrypt.compare(password, foundUser.password);
  if (!isPasswordMatched) {
    res.status(401).json({ message: "Wrong password!" });
    return;
  }
  const payload = { name };

  const authToken = jsonwebtoken.sign(payload, process.env.TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: "3h",
  });

  res.status(200).json({ message: `Welcome ${name}`, authToken });
});


module.exports = router;
