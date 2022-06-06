const { response } = require("express");
const { isValidObjectId } = require("mongoose");
const router = require("express").Router();
const Favorite = require("../models/favorites.models.js");
const User = require("../models/user.models.js");
const Restaurant = require("../models/restaurants.models.js");
const { populate } = require("../models/restaurants.models.js");

// create favorite
router.post("/", async (req, res, next) => {
  try {
    let { user, restaurant } = req.body;
    if (!isValidObjectId(user)) {
      const foundUser = await User.findOne({ name: { $regex: user } });
      if (foundUser) {
        user = foundUser._id;
      } else {
        res.status(400).json({
          message: `Please provide a valid name or object id`,
        });
        return;
      }
    }
    if (!isValidObjectId(restaurant)) {
      const foundRestaurant = await Restaurant.findOne({
        name: { $regex: restaurant },
      });
      if (foundRestaurant) {
        restaurant = foundRestaurant._id;
      } else {
        res.status(400).json({
          message: `Please provide a valid name or object id`,
        });
        return;
      }
    }
    const { _id } = await Favorite.create({
      user,
      restaurant,
    });
    const populatedFavorite = await Favorite.findById(_id).populate(
      "user restaurant"
    );
    res.status(201).json({ message: `New favorite add`, populatedFavorite });
  } catch (err) {
    next(err);
  }
});

// all favorites

router.get("/", async (req, res, next) => {
  try {
    const allFavorites = await Favorite.find();
    res.status(200).json(allFavorites);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
