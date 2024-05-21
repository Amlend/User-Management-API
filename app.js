const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const User = require("./models/user");
const userRoutes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ extended: false }));

//Routes
app.use(userRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.gxjlxqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
