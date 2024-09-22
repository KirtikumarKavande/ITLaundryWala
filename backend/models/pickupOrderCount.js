const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pickupOrderCountSchema = new Schema({
    _id: { type: String, default: "8308405964416101" },
    pickupId: { type: Number, default: 0 }
});

module.exports =mongoose.model('pickupOrderCount', pickupOrderCountSchema);