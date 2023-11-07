const express = require("express");
const cloth = require("../Controller/clothDetails");

const router = express.Router();

//add auth middalware
router.post("/clothdetails", cloth.clothDetails);
module.exports = router;
