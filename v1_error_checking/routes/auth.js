const express = require("express");
const router = express.Router();
const { signup } = require("../controller/auth");

//validators

const { runValidation } = require("../validators");
const { userSingupValidator } = require("../validators/auth");

router.post("/signup", userSingupValidator, runValidation, signup);

module.exports = router;
