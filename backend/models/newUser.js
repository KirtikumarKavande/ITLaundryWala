const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newUserSchema = new Schema({
  customerId: { type: Number, required: true },
  name: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("customer", newUserSchema);
