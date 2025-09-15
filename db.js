const mongoose = require("mongoose");
require("dotenv").config();
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;

mongoose
  .connect(DB_CONNECTION_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
module.exports = mongoose;
