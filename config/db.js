require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  // Database connection

  try {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to database");
      });
  } catch (err) {
    console.log("Could not connect to database");
  }
}

module.exports = connectDB;
