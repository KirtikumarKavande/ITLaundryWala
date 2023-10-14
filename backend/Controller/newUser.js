const User = require("../models/newUser");
const newUser = async (req, res) => {
  const { customerID, name, mobileNumber, address } = req.body;
  console.log(">>>>>>", req.body);

  try {
    const user = new User({
      customerId: Number(customerID),
      name: name,
      mobileNumber: Number(mobileNumber),
      address: address,
    });

    const data = await user.save();

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getId = async (req,res) => {
  try {
    const count = await User.countDocuments();
    console.log(count);

    res.status(200).json({ success: true, message: count });
  } catch (err) {
    res.status(400).json({ success: false, err: err });
  }
};

module.exports = { newUser, getId };
