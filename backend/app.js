const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const newUser = require("./Routes/newUser");
const user = require("./Routes/user");
const otp = require("./Routes/otpVarification");
const existinguser = require("./Routes/existingUser");
const clothDetails = require("./Routes/clothDetails");
const pricing = require("./Routes/pricing");
const printBarcode = require("./Routes/printBarcode");
const rateLimit = require('express-rate-limit');
const onlineOrderDetails=require("./Routes/onlineOrderCustomerDetails")
const cookieParser = require('cookie-parser');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, 
  message: 'please try again after 15 minutes'
});


const dotenv = require("dotenv");
const result = dotenv.config();

if (result.error) {
  console.error("Error loading .env file:", result.error);
}
const app = express();
app.use(cookieParser());

app.use(cors({ origin: "http://13.201.148.14:3000", credentials: true }));

app.use(limiter);
app.use(bodyParser.json({ extended: false }));

app.use(user);
app.use(otp);
app.use(newUser);
app.use(existinguser);
app.use(clothDetails);
app.use(pricing);
app.use(printBarcode);
app.use(onlineOrderDetails)
// app.use(expense);

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then((result) => {
    console.log("connected To DB");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
