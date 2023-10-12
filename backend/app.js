const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const user = require("./Routes/user");
const otp = require("./Routes/otpVarification");

const dotenv = require("dotenv");
const result =dotenv.config();

if (result.error) {
  console.error("Error loading .env file:", result.error);
}
const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(user);
app.use(otp)

// app.use(expense);


mongoose
  .connect( process.env.MONGODB_CONNECTION_URL)
  .then((result) => {
    console.log("connected To DB");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
