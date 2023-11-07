const express = require("express");
const cloth = require("../Controller/orderDetails");
const auth = require("../middleware/Auth");

const router = express.Router();

router.post("/orderdetails", auth.authenticate, cloth.orderDetails);
module.exports = router;
