const jwt = require("jsonwebtoken");
const User = require("../models/auth");
const auth = require("../Admincreditial");
require("dotenv").config();

const authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const user = jwt.verify(token, process.env.JWT_KEY);
    if (user.email === auth.email) {
      req.user = user;
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: "false" });
  }
};

module.exports = { authenticate };
