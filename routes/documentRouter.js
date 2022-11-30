/* const express = require("express");
const router = express.Router(); */
import express from "express";

const documentRouter = express.Router();

documentRouter.get("/", async function (req, res) {
  res.send("This is the Document page");
});

export { documentRouter };
