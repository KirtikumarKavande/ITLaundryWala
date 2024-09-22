const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const onlineOrderSchema = new Schema({
    pickupId: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid mobile number!`
        }
    },
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-z\s]+$/.test(v);
            },
            message: (props) => `${props.value} is not a valid name!`
        }
    },
    pickupTime: {
        type: String,
        required: true
    },
    pickupDate: {
        type: String,
        required: true
    },
    isUserExist:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model("OnlineOrder", onlineOrderSchema);
