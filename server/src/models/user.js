const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "Bạn phải nhập tên đăng nhập"],
      maxlength: 100
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.default.isEmail) {
          throw new Error("Email nhập không chính xác");
        }
      }
    },
    DOB: Date,
    firstName: {
      type: String,
      minlength: 1,
      trim: true,
      maxlength: 50
    },
    lastName: {
      type: String,
      minlength: 1,
      trim: true,
      maxlength: 50
    },
    gender: {
      type: String,
      trim: true
    },
    position: {
      type: String,
      trim: true
    },
    location: {
      type: String,
      trim: true
    },
    phoneNumber: {
      type: String,
      trim: true
    },
    avatar: String,
    comment: [],
    SSN: String,
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);
//Methods
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "2TLC");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
userSchema.methods.toJSON = function() {
  const user = this;
  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.tokens;
  delete updatedAt;
  return userObj;
};
//Statics
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Unable to Login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to Login");
  }
  return user;
};
//Hashing
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
