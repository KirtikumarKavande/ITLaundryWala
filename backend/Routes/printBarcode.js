const express = require("express");
const printBarcode = require("../Controller/printBarcode");
const router = express.Router();

router.post("/generate-and-print", printBarcode.printBarCode);


module.exports = router;
