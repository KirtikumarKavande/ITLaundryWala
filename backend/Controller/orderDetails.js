const OrderDetails = require("../models/orderDetails");

const orderDetails = async (req, res) => {

  try {
    Order = new OrderDetails({
      ...req.body,
    });
    await Order.save();
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "order details added successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      statusCode: 400,
      success: true,
      message: err,
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const urlParams = req.params;

    if (+urlParams.id >= 0) {
      const data = await OrderDetails.find({ customerId: urlParams.id });
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: data,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      statusCode: 400,
      success: true,
      message: "Something Went Wrong Try Again",
    });
  }
};

const updateOrderDetails = async (req, res) => {
  try {
    await OrderDetails.findByIdAndUpdate(req.params.id, { delivered: true });

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "order Updated  successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      statusCode: 400,
      success: true,
      message: err,
    });
  }
};
module.exports = { orderDetails, getOrderDetails, updateOrderDetails };
