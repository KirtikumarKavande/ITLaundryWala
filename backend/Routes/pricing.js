const express = require("express");
const pricing = require("../Controller/pricing");
const router = express.Router();

router.get("/drycleaning", pricing.dryCleaning);


module.exports = router;
