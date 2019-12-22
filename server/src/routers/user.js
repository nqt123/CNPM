const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send(users);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.get("/users/me", auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/users/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    return res.send({ error });
  }
});
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.status(201).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.post("/users/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => token.token != req.token)
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(500).send()
    }
});
router.post('/users/logoutAll', auth, async (req,res)=>{
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send(req.user)
    } catch (error) {
        res.status(500).send({error : error})
    }
})
router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    updates.forEach(update => (user[update] = req.body[update]));

    await user.save();

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(200).send(user);
});

module.exports = router;
