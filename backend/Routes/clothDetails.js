const express = require("express");
const cloth = require("../Controller/orderDetails");
const auth = require("../middleware/Auth");

const router = express.Router();

router.post("/orderdetails", auth.authenticate, cloth.orderDetails);
router.post("/orderdetails/:id", auth.authenticate, cloth.updateOrderDetails);

router.get("/orderdetails/:id", auth.authenticate, cloth.getOrderDetails);

module.exports = router;
