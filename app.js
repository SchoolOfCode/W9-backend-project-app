const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;
//const PORT = process.env.PORT;

const calendarRouter = require("./routes/calendarRouter.js");
const documentRouter = require("./routes/documentRouter.js");
const fitnessRouter = require("./routes/fitnessRouter.js");
const flashcardsRouter = require("./routes/flashcardsRouter.js");
const gamesRouter = require("./routes/gamesRouter.js");
const videosRouter = require("./routes/videosRouter.js");

app.use(morgan("dev"));

app.use(express.json());

app.use("/calendar", calendarRouter);
app.use("/document", documentRouter);
app.use("/fitness", fitnessRouter);
app.use("/flashcards", flashcardsRouter);
app.use("/videos", videosRouter);
app.use("/games", gamesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
