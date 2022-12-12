const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sessionID: {
    type: String,
    required: [true, "user must have sessionID"],
  },
  currentJoke: {
    type: Number,
    default: 1,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
