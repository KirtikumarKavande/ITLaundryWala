const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../Admincreditial");
require('dotenv').config();


const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// const Auth = require("../models/");
const generateAccessToken = (email) => {
  return jwt.sign({ emailId: email }, process.env.JWT_KEY);
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (
      auth.ADMIN_MANGER.email === email &&
      auth.ADMIN_MANGER.password === password
    ) {

      res.cookie('myCookie', 'Hello from the server!', { maxAge: 900000,  });
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Sign In Successfully",
        token: generateAccessToken(auth.ADMIN_MANGER.email),
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Email or Password is Invalid" });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

module.exports = { login };
