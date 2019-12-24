const mongoose = require("mongoose");
const validator = require("validator");

const exerciseSchema = new mongoose.Schema(
  {
    content: String,
    answers: [
      {
        number: Number,
        content: String
      }
    ],
    correctAnswer: Number,
    lesson: {
      type: mongoose.Types.ObjectId,
      ref: "Lesson"
    },
    type : String
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
