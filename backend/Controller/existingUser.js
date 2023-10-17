const User = require("../models/newUser");

const userDetails = async (req, res) => {
  
  try {
    const userDetails = await User.findOne(req.body);
    if (userDetails) {
      res.status(200).json({ success: true, message: userDetails });
    } else {
      res.status(400).json({ success: false, message: "User Not Found" });
    }
  } catch (err) {
    res.status(400).json({ success: false, err: err });
  }
};

module.exports = { userDetails };
