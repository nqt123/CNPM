const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "2TLC");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });
    if (!user) {
      throw new Error({ Error: "User not correct" });
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ Error: "User not Authenticated" });
  }
};
module.exports = auth;
