const mongoose = require("mongoose");

const threeDSchema = new mongoose.Schema(
  {
    title: String,
    url : String,
    type : String
  },
  { timestamps: true }
);

const threeD = mongoose.model("threeD", threeDSchema);

module.exports = threeD;
