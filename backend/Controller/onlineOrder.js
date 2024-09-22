const mongoose = require('mongoose');
const OnlineOrder = require('../models/onlineOrder');
const { body, validationResult } = require('express-validator');
const pickUpCounter = require('../models/pickupOrderCount');
const xss = require('xss');

const validateOnlineOrder = [
    body('address').trim().customSanitizer(value => xss(value)).notEmpty().withMessage('Address is required'),
    body('mobileNumber').trim().isMobilePhone('any').withMessage('Invalid mobile number'),
    body('name').trim().customSanitizer(value => xss(value)).matches(/^[A-Za-z\s]+$/).withMessage('Name must contain only letters and spaces'),
    body('pickupTime').trim().customSanitizer(value => xss(value)).notEmpty().withMessage('Pickup time is required'),
    body('pickupDate').trim().customSanitizer(value => xss(value)).isDate().withMessage('Invalid pickup date')
];

// Helper function to sanitize and validate input
const sanitizeAndValidate = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new Error(errors.array().map(err => err.msg).join(', '));
    }
    return {
        address: req.body.address,
        mobileNumber: req.body.mobileNumber,
        name: req.body.name,
        pickupTime: req.body.pickupTime,
        pickupDate: req.body.pickupDate
    };
};

async function addOnlineOrder(req, res) {
    try {
        console.log("req.body", req.body);

        const sanitizedData = sanitizeAndValidate(req);

        for (let key in sanitizedData) {
            if (typeof sanitizedData[key] !== 'string') {
                throw new Error(`Invalid input type for ${key}`);
            }
        }
        const counterData = await pickUpCounter.findById("8308405964416101")
        let pickupId
        if (!counterData) {
            pickupId = 0
        } else {
            pickupId = counterData.pickupId
        }
        let modifiedData = {
            ...sanitizedData,
            pickupId: pickupId + 1
        }

        const newOrder = new OnlineOrder(modifiedData);

        const savedOrder = await newOrder.save();

        if (savedOrder) {
            await pickUpCounter.findByIdAndUpdate(
                { _id: '8308405964416101' },
                { $inc: { pickupId: 1 } },
                { new: true, upsert: true }
            );
        }

        res.status(201).json({
            message: 'Online order added successfully',
            order: savedOrder,
            statusCode: 201
        });
    } catch (error) {
        console.error('Error adding online order:', error);
        res.status(400).json({
            message: 'Failed to add online order',
            error: error.message
        });
    }
}
async function getAllOnlineOrders(req, res) {
    try {
        const orders = await OnlineOrder.find(); // Fetch all documents from the OnlineOrder collection
        res.status(200).json({
            message: 'All online orders fetched successfully',
            orders
        });
    } catch (error) {
        console.error('Error fetching online orders:', error);
        res.status(500).json({
            message: 'Failed to fetch online orders',
            error: error.message
        });
    }
}

module.exports = {
    addOnlineOrder,
    validateOnlineOrder,
    getAllOnlineOrders
};
