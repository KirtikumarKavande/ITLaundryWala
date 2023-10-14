const express = require("express");
const user = require("../Controller/newUser");

const AuthMiddleware = require("../middleware/Auth");

const router = express.Router();

router.post("/addnewuser", AuthMiddleware.authenticate, user.newUser);
router.get("/userid", AuthMiddleware.authenticate, user.getId);


// router.get("/show-expense", AuthMiddleware.authenticate, expense.showExpenses);

module.exports = router;
