const express = require("express");
require("./src/db/mongoose");
const cors = require('cors')
const userRouter = require("./src/routers/user");
const lessonRouter = require("./src/routers/lesson");
const examRouter = require("./src/routers/exam");
const excerciseRouter = require("./src/routers/exercise");
const recordRouter = require("./src/routers/record");
const commentRouter = require("./src/routers/comment");

const app = express();
app.use(cors)
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(userRouter);
app.use(lessonRouter);
app.use(examRouter);
app.use(excerciseRouter);
app.use(recordRouter);
app.use(commentRouter);

app.listen(PORT, () => {
  console.log("Server is Started");
});
