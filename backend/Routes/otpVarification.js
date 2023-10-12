const express = require("express");
const otp = require("../Controller/otpVarification");
const router = express.Router();
router.get("/otpmail", otp.emailForOtp);

router.post("/otp", otp.otpVarify);


module.exports = router;
