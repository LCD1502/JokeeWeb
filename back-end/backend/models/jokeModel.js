const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Car must have content"],
  },
  sequence: {
    type: Number,
    unique: true,
    required: [true, "joke must have sequence"],
  },
  like: {
    type: Number,
    default: 0,
  },
  dislike: {
    type: Number,
    default: 0,
  },
});

const Joke = mongoose.model("Joke", jokeSchema);
module.exports = Joke;
