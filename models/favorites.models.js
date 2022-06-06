const { Schema, SchemaTypes, model } = require("mongoose");

const favoriteSchema = new Schema({
  user: { type: SchemaTypes.ObjectId, ref: "User", required: true },
  restaurant: { type: SchemaTypes.ObjectId, ref: "Restaurant", required: true },
//   timestamps: true,
});

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
