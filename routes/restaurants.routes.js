const { response } = require("express");
const router = require("express").Router();
const Restaurant = require("../models/restaurants.models.js");

// Post routes
router.post("/", async (req, res, next) => {
  try {
    const addRestaurant = await Restaurant.create(req.body);
    res.status(201).json({ message: `New Restaurant created:`, addRestaurant });
  } catch (err) {
    next(err);
  }
});

// Get all restaurants
router.get("/", async (req, res, next) => {
  try {
    const allRestaurants = await Restaurant.find();
    res.status(200).json(allRestaurants);
  } catch (err) {
    next(err);
  }
});

// Get by ID

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const restaurantInfo = await Restaurant.findById(id);
    res.status(200).json(restaurantInfo);
  } catch (err) {
    next(err);
  }
});

// Update by ID
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedRestaurant);
  } catch (err) {
    next(err);
  }
});

// const restaurants = [
//   {
//     name: "SUPERBAO",
//     adress: {
//       street: "16 rue Daval",
//       postcode: 75011,
//       city: "Paris",
//     },
//     style: "Asiatique / Fast-food",
//     price: "$",
//     rating: 4.5,
//   },
// ];

// const validPrice = ["$", "$$", "$$$", "$$$$", "$$$$$"];

// // GET restaurants
// router.get("/", (req, res) => {
//   res.json({
//     restaurants: restaurants,
//   });
// });

// // GET restaurant by key

// function addRouteForKey(key) {
//   router.get(`/${key}/:${key}`, (req, res, next) => {
//     const value = req.params[key];
//     const restaurant = restaurants.find((element) => element[key] === value);

//     //add if !book
//     if (!restaurant) {
//       next();
//       return;
//     }

//     res.json(restaurant);
//   });
// }
// addRouteForKey("name");
// addRouteForKey("adress");
// addRouteForKey("style");
// addRouteForKey("price");
// addRouteForKey("rating");

// // POST restaurants
// router.post("/", (req, res) => {
//   const restaurant = req.body;

//   if (!restaurant.name || typeof restaurant.name !== "string") {
//     res.status(400).json({
//       message: "Please provide a proper restaurant name",
//     });
//     return;
//   }
//   if (
//     !(
//       restaurant.adress.street &&
//       restaurant.adress.postcode &&
//       restaurant.adress.city
//     )
//   ) {
//     res.status(400).json({
//       message:
//         "Please provide the full restaurant adress (street, postcode, city)",
//     });
//     return;
//   }
//   if (
//     !restaurant.adress.street ||
//     typeof restaurant.adress.street !== "string"
//   ) {
//     res.status(400).json({
//       message: "Please provide a proper restaurant street",
//     });
//     return;
//   }
//   if (
//     !restaurant.adress.postcode ||
//     typeof restaurant.adress.postcode !== "number"
//   ) {
//     res.status(400).json({
//       message: "Please provide a proper restaurant postcode",
//     });
//     return;
//   }
//   if (!restaurant.adress.city || typeof restaurant.adress.city !== "string") {
//     res.status(400).json({
//       message: "Please provide a proper restaurant city",
//     });
//     return;
//   }
//   if (!restaurant.style || typeof restaurant.style !== "string") {
//     res.status(400).json({
//       message: "Please provide a proper restaurant style",
//     });
//     return;
//   }
//   if (
//     !restaurant.price ||
//     typeof restaurant.price !== "string" ||
//     !validPrice.includes(restaurant.price)
//   ) {
//     res.status(400).json({
//       message: `Please provide a proper restaurant price between: ${validPrice}`,
//     });
//     return;
//   }
//   if (
//     typeof restaurant.rating !== "number" ||
//     restaurant.rating === null ||
//     !(restaurant.rating >= 0) ||
//     !(restaurant.rating <= 5)
//   ) {
//     res.status(400).json({
//       message:
//         "Please provide a proper restaurant rating (should be a number between 0 and 5 included)",
//     });
//     return;
//   }

//   restaurants.push(req.body);
//   res.status(201).json({
//     message: "The restaurant has been successfully added to the API",
//   });
// });

module.exports = router;
