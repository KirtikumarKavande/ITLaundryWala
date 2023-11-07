const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clothUserSchema = new Schema({
  washType: { type: Number, required: true },
  weight: { type: String },
  clothType: { type: Object, required: true },
  pickup: { type: String, required: true },
  delivery: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model("clothDetails", clothUserSchema);
