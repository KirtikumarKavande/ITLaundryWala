const dryCleaningPricing = require("../Pricing/DryCleaning");
const dryCleaning = async (req, res) => {
  try {
    res.status(200).json({
      data: dryCleaningPricing.DryCleaning,
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

module.exports = { dryCleaning };
