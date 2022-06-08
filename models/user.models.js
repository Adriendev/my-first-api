const { Schema, SchemaTypes, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: SchemaTypes.String, required: true },
  age : {type : SchemaTypes.Number},
  password :{type : SchemaTypes.String, require : true},
  favorites: { type: SchemaTypes.ObjectId, ref: "Restaurant" },
});

const User = model("User", userSchema);

module.exports = User;
