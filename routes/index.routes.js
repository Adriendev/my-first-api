const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Paris Restaurants tried or not",
  });
});

module.exports = router;
