const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../Admincreditial");
require('dotenv').config();



// const Auth = require("../models/");
const generateAccessToken = (email) => {
  return jwt.sign({ emailId: email }, process.env.ACCESS_KEY);
};
async function logout(req,res) {
  try {

    res.clearCookie('token', {
      httpOnly: true,  // Same options as when setting the cookie
      sameSite: 'lax', // Ensure the options match when you set the cookie
    });

    res.status(200).json({ message: "Logout successful", statusCode: 200 });

  } catch (error) {
    res.status(400).json({ message: "something went wrong" });

  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (
      auth.ADMIN_MANGER.email === email &&
      auth.ADMIN_MANGER.password === password
    ) {

      // res.cookie('token', generateAccessToken(auth.ADMIN_MANGER.email), {
      //   httpOnly: true,           // Prevents JavaScript access to the cookie
      //   sameSite: 'lax',          // Suitable for local development
      //   maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      // });
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Sign In Successfully",
        // token: generateAccessToken(auth.ADMIN_MANGER.email),
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

module.exports = { login,logout };
