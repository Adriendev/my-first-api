// express

require("dotenv/config");

const db = require("./DB/connect");

// const express = require("express");

// const hbs = require("hbs");

const express = require("express");
const app = express();

require("./config")(app);

// 👇 Start handling routes here

const indexRouter = require("./routes/index.routes.js");
app.use("/", indexRouter);
const restaurantsRouter = require("./routes/restaurants.routes.js");
app.use("/restaurants", restaurantsRouter);

const userRouter = require("./routes/user.routes.js");
app.use("/user", userRouter);

const favoriteRouter = require("./routes/favorite.routes.js");
app.use("/favorite", favoriteRouter);

const authRouter = require("./routes/auth.routes")
app.use("/auth", authRouter)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling/error-handling")(app);
// const addErrorHandling = require("./error-handling.js");
// addErrorHandling(app);
app.listen(process.env.PORT, () => {
  console.log(`test listening on port http://localhost:${process.env.PORT}`);
});

// Mongoose
const { default: mongoose } = require("mongoose");
const Restaurants = require("./models/restaurants.models.js");
const openConnection = require("./DB/connect.js");

// connect to database

// async function createRestaurant() {
//   const newRestaurant = await Restaurants.create({
//     name: "Luisa Maria",
//     adress: {
//       street: "12 rue monsieur le prince",
//       postcode: "75006",
//       city: "Paris",
//     },
//     style: "Italien / Pizza",
//     price: "$$",
//     rating: 4.4,
//     tried: false,
//   }).catch((err) => {
//     console.error(`Error connecting to mongo: ${MONGO_URI}.`, err);
//   console.log(restaurants);
//   await mongoose.connection.close()
//   });
// }

// createRestaurant()
