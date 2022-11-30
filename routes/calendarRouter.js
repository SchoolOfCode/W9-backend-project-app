/* const express = require("express");
const router = express.Router(); */
import { Router } from "express";
const calendarRouter = Router();

calendarRouter.get("/", async function (req, res) {
  res.send("This is the Calendar page");
});

export { calendarRouter };
