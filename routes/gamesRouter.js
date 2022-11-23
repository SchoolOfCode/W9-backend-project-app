const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  res.send("This the Games page ");
});

module.exports = router;
