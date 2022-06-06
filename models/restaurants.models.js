const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: mongoose.SchemaTypes.String, required: true },
  adress: {
    street: { type: mongoose.SchemaTypes.String, required: true },
    postcode: { type: mongoose.SchemaTypes.String, required: true },
    city: { type: mongoose.SchemaTypes.String, required: true },
  },
  style: { type: mongoose.SchemaTypes.String },
  price: { type: mongoose.SchemaTypes.String },
  rating: { type: mongoose.SchemaTypes.Number },
  tried: { type: mongoose.SchemaTypes.Boolean },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
