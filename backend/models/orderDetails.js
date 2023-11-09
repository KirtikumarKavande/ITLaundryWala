const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderDetailsSchema = new Schema({
  washType: { type: Object, required: true },
  weight: { type: String },
  clothType: { type: Array, required: true },
  pickupDate: { type: String, required: true },
  deliveryDate: { type: String, required: true },
  amountForPerKg: { type: Number },
  amountForPerPeice: { type: Number },
  customerId: { type: String },
  delivered: { type: Boolean, required: true },
  
});

module.exports = mongoose.model("orderDetails", orderDetailsSchema);
