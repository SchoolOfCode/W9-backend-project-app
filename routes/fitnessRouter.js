const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  res.send("This is the Fitness page ");
});

module.exports = router;
