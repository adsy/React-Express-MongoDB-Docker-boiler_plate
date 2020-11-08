var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

// Variable to be sent to frontend with DB status
let dbConnection = "Connecting to Database - waiting for response..";

router.get("/", function (req, res, next) {
  res.send(dbConnection);
});

// Connect to mongoDB
mongoose.connect("mongodb://mongodb:27017/test");

// If there is a connection error send an error message
mongoose.connection.on("error", (error) => {
  console.log("Database connection error:", error);
  dbConnection = "Error connecting to Database";
});
// If connected to MongoDB send a success message
mongoose.connection.once("open", (res) => {
  console.log("Connected to Database!");
  dbConnection = "Connected to Database";
});

module.exports = router;
