const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const { registerUser, loginUser } = require("../controllers/authControler.js");

router.post("/signup", registerUser);
router.post("/login", loginUser);

module.exports = router;
