/* const express = require("express");
const router = express.Router(); */
import express from "express";
const wellbeingRouter = express.Router();

wellbeingRouter.get("/", async function (req, res) {
  res.send("This is the Wellbeing page ");
});

export { wellbeingRouter };
