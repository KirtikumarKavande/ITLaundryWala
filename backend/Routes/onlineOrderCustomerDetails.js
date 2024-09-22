const { Router } = require("express");

const router=Router()

const onlineOrder = require("../Controller/onlineOrder")


router.post("/onlineorder", onlineOrder.addOnlineOrder )
router.get("/onlineorder", onlineOrder.getAllOnlineOrders )
router.delete("/onlineorder", onlineOrder.deleteOrdersByPickupIds )

module.exports = router