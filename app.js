import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3005;
//const PORT = process.env.PORT;

import cors from "cors";

import { studentsRouter } from "./routes/studentsRouter.js";
import { calendarRouter } from "./routes/calendarRouter.js";
import { documentRouter } from "./routes/documentRouter.js";
import { wellbeingRouter } from "./routes/wellbeingRouter.js";
import { flashcardsRouter } from "./routes/flashcardsRouter.js";
import { gamesRouter } from "./routes/gamesRouter.js";
import { videosRouter } from "./routes/videosRouter.js";

app.use(morgan("dev"));

app.use(cors("*"));

app.use(express.json());

app.use("/students", studentsRouter);
app.use("/calendar", calendarRouter);
app.use("/document", documentRouter);
app.use("/wellbeing", wellbeingRouter);
app.use("/flashcards", flashcardsRouter);
app.use("/videos", videosRouter);
app.use("/games", gamesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
