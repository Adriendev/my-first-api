const { response } = require("express");

const router = require("express").Router();

const restaurants = [
  {
    name: "SUPERBAO",
    adress: {
      street: "16 rue Daval",
      postcode: 75011,
      city: "Paris",
    },
    style: "Asiatique / Fast-food",
    price: "$",
    rating: 4.5,
  },
];

const validPrice = ["$", "$$", "$$$", "$$$$", "$$$$$"];

// GET restaurants
router.get("/", (req, res) => {
  res.json({
    restaurants: restaurants,
  });
});

// POST restaurants
router.post("/", (req, res) => {
  const restaurant = req.body;

  if (!restaurant.name || typeof restaurant.name !== "string") {
    res.status(400).json({
      message: "Please provide a proper restaurant name",
    });
    return;
  }
  if (
    !(
      restaurant.adress.street &&
      restaurant.adress.postcode &&
      restaurant.adress.city
    )
  ) {
    res.status(400).json({
      message:
        "Please provide the full restaurant adress (street, postcode, city)",
    });
    return;
  }
  if (
    !restaurant.adress.street ||
    typeof restaurant.adress.street !== "string"
  ) {
    res.status(400).json({
      message: "Please provide a proper restaurant street",
    });
    return;
  }
  if (
    !restaurant.adress.postcode ||
    typeof restaurant.adress.postcode !== "number"
  ) {
    res.status(400).json({
      message: "Please provide a proper restaurant postcode",
    });
    return;
  }
  if (!restaurant.adress.city || typeof restaurant.adress.city !== "string") {
    res.status(400).json({
      message: "Please provide a proper restaurant city",
    });
    return;
  }
  if (!restaurant.style || typeof restaurant.style !== "string") {
    res.status(400).json({
      message: "Please provide a proper restaurant style",
    });
    return;
  }
  if (
    !restaurant.price ||
    typeof restaurant.price !== "string" ||
    !validPrice.includes(restaurant.price)
  ) {
    res.status(400).json({
      message: `Please provide a proper restaurant price between: ${validPrice}`,
    });
    return;
  }
  if (!restaurant.rating || typeof restaurant.rating !== "number") {
    res.status(400).json({
      message: "Please provide a proper restaurant rating (should be a number)",
    });
    return;
  }

  restaurants.push(req.body);
  res.status(201).json({
    message: "The restaurant has been successfully added to the API",
  });
});

module.exports = router;
