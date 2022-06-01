const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
  name: { type: mongoose.SchemaTypes.String, required: true },
  adress: {
    street: { type: mongoose.SchemaTypes.String, required: true },
    postcode: { type: mongoose.SchemaTypes.String, required: true },
    city: { type: mongoose.SchemaTypes.String, required: true },
  },
  style: { type: mongoose.SchemaTypes.String, required: true },
  price: { type: mongoose.SchemaTypes.String, required: true },
  rating: { type: mongoose.SchemaTypes.Number, required: true },
});

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

// third, we need to connect to mongoose
const MONGO_URI = "mongodb://localhost:27017/webdev-905";
// TODO: connect
const connection = mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    // finally, let's do something
    // TODO: use Course to insert, find, update, etc

  return  Restaurants.create({
        name: "test2",
        adress: {
          street: "test2",
          postcode: "test2",
          city: "test2",
        },
        style: "test2",
        price: "test2",
        rating: 5,
    })

    // return Restaurants.find();

  })
  .then((restaurants) => {
    console.log(restaurants);
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.error(`Error connecting to mongo: ${MONGO_URI}.`, err);
  });
