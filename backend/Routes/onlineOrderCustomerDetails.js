const { Router } = require("express");

const router=Router()

const onlineOrder = require("../Controller/onlineOrder")


router.post("/onlineorder", onlineOrder.addOnlineOrder )

module.exports = router