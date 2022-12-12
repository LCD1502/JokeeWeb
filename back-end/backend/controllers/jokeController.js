const catchAsync = require("../utils/catchAsync");
const Joke = require("../models/jokeModel");
const User = require("../models/userModel");

exports.createJoke = catchAsync(async (req, res, next) => {
  const joke = await Joke.create({ ...req.body });
  if (!joke) return next(new Error("Couldn't create"));

  res.status(201).json({
    status: "success",
    joke,
  });
});

exports.getAllJoke = catchAsync(async (req, res, next) => {
  const allJoke = await Joke.find({});
  res.status(200).json({
    status: "success",
    allJoke,
  });
});

exports.getOneJokeBySeq = catchAsync(async (req, res, next) => {
  const joke = await Joke.findOne({ sequence: req.params.seq });
  if (!joke) return next(new Error("No Joke found with this Seq"));
  res.status(200).json({
    status: "success",
    joke,
  });
});

exports.getOneNextJoke = catchAsync(async (req, res, next) => {
  console.log(req.currentUser);
  const currentUser = req.currentUser;
  if (currentUser.currentJoke === 4) {
    res.status(200).json({
      status: "success",
      joke: {
        messageEnd: "That's all the jokes for today! Come back another day!",
      },
    });
  } else {
    const joke = await Joke.findOne({ sequence: currentUser.currentJoke + 1 });
    const updatedUser = await User.findOneAndUpdate(
      { sessionID: currentUser.sessionID },
      {
        currentJoke: currentUser.currentJoke + 1,
      }
    );
    console.log(updatedUser);
    res.status(200).json({
      status: "success",
      joke,
    });
  }
});

exports.getOneCurrentJoke = catchAsync(async (req, res, next) => {
  console.log(req.currentUser);
  const currentUser = req.currentUser;
  if (currentUser.currentJoke === 4) {
    res.status(200).json({
      status: "success",
      joke: {
        messageEnd: "That's all the jokes for today! Come back another day!",
      },
    });
  } else {
    const joke = await Joke.findOne({ sequence: currentUser.currentJoke });
    res.status(200).json({
      status: "success",
      joke,
    });
  }
});

exports.likeJoke = catchAsync(async (req, res, next) => {
  const joke = await Joke.updateOne(
    {
      sequence: req.params.seq,
    },
    {
      $inc: { like: 1 },
    }
  );
  if (!joke) return next(new Error("Update Failed"));
  res.status(200).json({
    status: "success",
    joke,
  });
});

exports.dislikeJoke = catchAsync(async (req, res, next) => {
  const joke = await Joke.updateOne(
    {
      sequence: req.params.seq,
    },
    {
      $inc: { dislike: 1 },
    }
  );
  if (!joke) return next(new Error("Update Failed"));
  res.status(200).json({
    status: "success",
    joke,
  });
});
