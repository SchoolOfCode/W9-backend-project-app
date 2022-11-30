import express from "express";

const videosRouter = express.Router();

videosRouter.get("/", async function (req, res) {
  res.send("This is the videos page");
});

export { videosRouter };
