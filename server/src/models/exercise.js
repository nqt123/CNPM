const mongoose = require("mongoose");
const validator = require("validator");

const exerciseSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    category: [],
    type: String,
    title: {
      type: String,
      minlength: 5
    },
    note: {
      type: String
    },
    comment: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment"
      }
    ],
    lesson: {
      type: mongoose.Types.ObjectId,
      ref: "Lesson"
    },
    questions: String,
    viewNumber: Number,
    source: String,
    tags: [],
    section: [],
    downloaded: Number,
    rated: Number
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
