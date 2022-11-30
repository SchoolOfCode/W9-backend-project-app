/* const express = require("express");
const router = express.Router(); */
import express from "express";
const gamesRouter = express.Router();

gamesRouter.get("/", async function (req, res) {
  res.send("This the Games page ");
});

export { gamesRouter };
