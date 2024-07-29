const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const mainplug = require("./Router/routes.js");
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(mainplug);


mongoose
  .connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log("Server is listening on port " + PORT);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    // Terminate the application on database connection error
    process.exit(1);
  });