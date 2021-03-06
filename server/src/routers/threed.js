const express = require("express");
const router = express.Router();
const ThreeD = require("../models/threed");
router.get("/threeDs", async (req, res) => {
  try {
    // * Query for Search
    const query = {};
    if (req.query.type) {
      query.type = { $regex: req.query.type, $options: "gi" };
    }
    if (req.query.title) {
      query.title = { $regex: req.query.title, $options: "gi" };
    }
    // * Find
    const threeDs = await ThreeD.find(query);
    // * Query for Random`
    if (req.query.random) {
      const random = threeDs[Math.floor(Math.random() * threeDs.length)];
      return res.status(200).send(random);
    }
    res.status(200).send(threeDs);
  } catch (error) {
    res.status(400).send({ error });
  }
});
router.get("/threeDs/:id", async (req, res) => {
  try {
    const threeD = await ThreeD.findById(req.params.id);
    if (!threeD) {
      return res.status(404).send({ error: "" });
    }
    res.status(200).send(threeD);
  } catch (error) {
    res.status(400).send({ error: "Internal Error" });
  }
});
router.post("/threeDs", async (req, res) => {
  const threeD = new ThreeD(req.body);
  try {
    await threeD.save();
    res.status(201).send(threeD);
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.patch("/threeDs/:id", async (req, res) => {
  const threeD = await ThreeD.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!threeD) {
    return res.status(404).send({ error: "ThreeD Not Found" });
  }
  return res.status(200).send(threeD);
});
router.delete("/threeDs/:id", async (req, res) => {
  try {
    const threeD = await ThreeD.findByIdAndRemove(req.params.id);
    res.status(200).send(threeD);
  } catch (error) {
    res.status(400).send({ error: "Internal Error" });
  }
});
module.exports = router;
