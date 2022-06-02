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
  tried: { type: mongoose.SchemaTypes.Boolean, required: true },
});

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

module.exports = Restaurants;
