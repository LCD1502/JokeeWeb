const catchAsync = require("../utils/catchAsync");
const shortid = require("shortid");
const Joke = require("../models/jokeModel");
const User = require("../models/userModel");

const createCookie = async (req, res, next) => {
  const sessionID = shortid.generate();
  const cookieOptions = {
    expires: new Date(
      Date.now() + 30 * 24 * 60 * 60 * 1000 // 30day
    ),
    // httpOnly: true,
    //secure: true,
  };
  res.cookie("sessionID", sessionID, cookieOptions);
  const user = await User.create({
    sessionID,
  });
  if (!user) return next(Error("Create session failed"));
  req.currentUser = user;
  return next();
};

exports.checkCookies = catchAsync(async (req, res, next) => {
  if (req.cookies.sessionID) {
    const currentUser = await User.findOne({
      sessionID: req.cookies.sessionID,
    });
    if (!currentUser) {
      catchAsync(createCookie(req, res, next));
    } else {
      req.currentUser = currentUser;
      return next();
    }
  } else {
    catchAsync(createCookie(req, res, next));
  }
});
