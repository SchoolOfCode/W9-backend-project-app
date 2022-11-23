const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  res.send("This is the Document page");
});

module.exports = router;
