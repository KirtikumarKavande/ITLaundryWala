const User = require("../models/newUser");
const newUser = async (req, res) => {
  const { customerID, name, mobileNumber, address } = req.body;

  try {
    const userDetails = await User.findOne({mobileNumber:+mobileNumber});
    if (userDetails) {

      
      return res.status(400).json({ success: false, message:"User Already Exists " });
    } else {
      const user = new User({
        customerId: Number(customerID),
        name: name,
        mobileNumber: Number(mobileNumber),
        address: address,
      });

      const data = await user.save();

      return res.status(200).json({ success: true, data });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getId = async (req, res) => {
  try {
    const count = await User.countDocuments();

    res.status(200).json({ success: true, message: count });
  } catch (err) {
    console.log(error)
    res.status(400).json({ success: false, err: err });
  }
};

module.exports = { newUser, getId };
