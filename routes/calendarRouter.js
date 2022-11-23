const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  res.send("This is the Calendar page");
});

module.exports = router;
