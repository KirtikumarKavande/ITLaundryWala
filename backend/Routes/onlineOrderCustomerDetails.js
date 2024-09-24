const { Router } = require("express");

const router=Router()

const onlineOrder = require("../Controller/onlineOrder")
const auth = require("../middleware/Auth");


router.post("/onlineorder", onlineOrder.addOnlineOrder )
router.get("/onlineorder",auth.authenticate, onlineOrder.getAllOnlineOrders )
router.delete("/onlineorder",auth.authenticate, onlineOrder.deleteOrdersByPickupIds )

module.exports = router