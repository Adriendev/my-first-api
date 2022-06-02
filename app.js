// express 
const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
const indexRouter = require("./routes/index.routes.js");
app.use("/", indexRouter);
const restaurantsRouter = require("./routes/restaurants.routes.js");
app.use("/restaurants", restaurantsRouter);
const addErrorHandling = require("./error-handling.js");
addErrorHandling(app);
app.listen(port, () => {
  console.log(`test listening on port ${port}`);
});

// Mongoose 
const { default: mongoose } = require('mongoose')
const Restaurants = require('./models/restaurants.models.js')
const openConnection = require('./DB/connect.js')

// connect to database 

async function createRestaurant() {
  const newRestaurant = await Restaurants.create({
    name: "Luisa Maria",
    adress: {
      street: "12 rue monsieur le prince",
      postcode: "75006",
      city: "Paris",
    },
    style: "Italien / Pizza",
    price: "$$",
    rating: 4.4,
    tried: false,
  }).catch((err) => {
    console.error(`Error connecting to mongo: ${MONGO_URI}.`, err);
  console.log(restaurants);
  await mongoose.connection.close()
  });
}

createRestaurant()