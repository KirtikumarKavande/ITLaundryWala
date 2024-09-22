const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Counter schema
const counterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);

// Function to get the next pickUpId
async function getNextPickUpId() {
    const counter = await Counter.findByIdAndUpdate(
        { _id: 'pickUpId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );
    return counter.seq;
}

// Modified onlineOrderSchema
const onlineOrderSchema = new Schema({
    pickUpId: {
        type: Number,
        required: true,
        unique: true
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
    }
});

// Pre-save middleware to set pickUpId
onlineOrderSchema.pre('save', async function(next) {
    if (!this.pickUpId) {
        this.pickUpId = await getNextPickUpId();
    }
    next();
});

const OnlineOrder = mongoose.model("OnlineOrder", onlineOrderSchema);

module.exports = OnlineOrder;