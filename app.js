const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const indexRouter = require("./routes/index.routes.js");
app.use("/", indexRouter);

const restaurantsRouter = require("./routes/restaurants.routes.js");
app.use("/restaurants", restaurantsRouter);

app.listen(port, () => {
  console.log(`test listening on port ${port}`);
});
