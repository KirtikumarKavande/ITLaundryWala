const OrderDetails = require("../models/orderDetails");

const orderDetails = async (req, res) => {
  console.log(req.body);

  try {
    Order = new OrderDetails({
      ...req.body,
    });
    await Order.save();
    res
      .status(200)
      .json({
        statusCode: 200,
        success: true,
        message: "order details added successfully",
      });
  } catch (err) {
    console.log(err)
    res
      .status(400)
      .json({
        statusCode: 400,
        success: true,
        message:err,
      });
  }
};

module.exports = { orderDetails };
