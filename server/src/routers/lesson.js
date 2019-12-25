const express = require("express");
const router = express.Router();
const Lesson = require("../models/lesson");

router.post("/lessons", async (req, res) => {
  const lesson = new Lesson(req.body);
  try {
    await lesson.save();
    res.status(201).send(query);
  } catch (error) {
    res.status(400).send({ error });
  }
});
router.get("/lessons", async (req, res) => {
  const query = {};
  if (req.query.title) {
    query.title = { $regex: req.query.title, $options: "gi" };
  }
  try {
    await Lesson.find(query)
      .populate("updatedBy createdBy teachedBy")
      .exec(function(err, lessons) {
        if (!lessons) {
          return res.status(200).send(lessons);
        }
        res.status(200).send(lessons);
      });
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/lessons/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    res.status(200).send(lesson);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/lessons/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!lesson) {
      return res.status(404).send({ error: "Lesson not found" });
    }
    res.status(200).send(lesson);
  } catch (error) {
    res.status(400).send({ error });
  }
});
router.delete("/lessons/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    res.status(200).send(lesson);
  } catch (error) {
    res.status(400).send({ error });
  }
});
router.patch("");

module.exports = router;
