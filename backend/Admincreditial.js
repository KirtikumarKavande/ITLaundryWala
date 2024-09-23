require("dotenv").config();

const ADMIN_MANGER = { email: process.env.email, password: process.env.ADMIN_PASSWORD};
module.exports={ADMIN_MANGER}