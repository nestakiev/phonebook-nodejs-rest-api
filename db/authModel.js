const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  avatarURL: String,
  token: {
    type: String,
    default: "",
  },
  // verify: {
  //   type: Boolean,
  //   default: false,
  // },
  // verificationToken: {
  //   type: String,
  //   required: [true, 'Verify token is required'],
  // },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
