const express = require("express");
const user = require("../Controller/existingUser");

const AuthMiddleware = require("../middleware/Auth");

const router = express.Router();

router.post("/userdetails", AuthMiddleware.authenticate, user.userDetails);



module.exports = router;
