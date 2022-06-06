const Restaurant = require("../models/restaurant.models.js");
const openConnection = require("../DB/connect.js");
const { default: mongoose } = require("mongoose");
const parisRestaurants = require("../restaurants-casvp.json");

// convert format of the data

function convertParisRestaurantToSchema(parisRestaurant) {
  const fields = parisRestaurant.fields;
  console.log(fields);
  console.log(fields.adresse);

  if (!fields.adresse) {
    console.error({ parisRestaurant });
    throw new Error("NOOOOOO");
  }

  return {
    name: fields.nom_restaurant,
    adress: {
      street: fields.adresse,
      postcode: fields.code,
      city: fields.ville,
    },
  };
}

async function seedParisRestaurants() {
  await openConnection();
  const convertedRestaurants = parisRestaurants.map(
    convertParisRestaurantToSchema
  );

  //delete duplicates without deleting all the collection. 
  await Promise.all(
    convertedRestaurants.map(
      (resto) => resto.name && Restaurants.deleteMany({ name: resto.name })
    )
  );

  //   console.log(convertedRestaurants);
  const createdRestaurants = await Restaurants.create(convertedRestaurants);
  console.log(`Created ${createdRestaurants.length} restaurants.`);
  await mongoose.connection.close();
  console.log("Connection closed.");
}

seedParisRestaurants();
