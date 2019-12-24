const express = require("express");
require("./src/db/mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;

// * Import Routers

const userRouter = require("./src/routers/user");
const lessonRouter = require("./src/routers/lesson");
const examRouter = require("./src/routers/exam");
const excerciseRouter = require("./src/routers/exercise");
const recordRouter = require("./src/routers/record");
const commentRouter = require("./src/routers/comment");
const threeD = require("./src/routers/threed");

// * Import middleware

const cors = require("cors");
const Ddos = require("ddos");
const app = express();
const ddos = new Ddos({ burst: 100, limit: 150 });
app.use(cors({ credentials: true, origin: true }));
app.use(ddos.express);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));
app.use(express.static("public"));
app.use(userRouter);
app.use(lessonRouter);
app.use(examRouter);
app.use(excerciseRouter);
app.use(recordRouter);
app.use(commentRouter);
app.use(threeD);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is Started at + `${PORT}`");
});
