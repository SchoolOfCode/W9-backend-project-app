/* const express = require("express");
const router = express.Router(); */
import express from "express";
const flashcardsRouter = express.Router();

flashcardsRouter.get("/", async function (req, res) {
  res.send("This is the Flachcards page");
});

export { flashcardsRouter };
