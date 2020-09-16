const express = require("express");
const router = express.Router();
const { walla } = require("../controller/blog");

router.get("/", walla);

module.exports = router;
