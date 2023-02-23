const router = require("express").Router();
const authController = require("../controller/authController");
router.get("/register", authController.registerPage);
module.exports = router;
