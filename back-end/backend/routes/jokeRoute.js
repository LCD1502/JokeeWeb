var express = require("express");
var router = express.Router();
const jokeController = require("../controllers/jokeController");
const userController = require("../controllers/userController");

/* GET home page. */
router.get("/getAllJoke", jokeController.getAllJoke);
router.post("/createJoke", jokeController.createJoke);
router.get("/getOneJokeBySeq/:seq", jokeController.getOneJokeBySeq);

router.get(
  "/getOneJoke",
  userController.checkCookies,
  jokeController.getOneJoke
);

router.patch("/likeJoke/:seq", jokeController.likeJoke);
router.patch("/dislikeJoke/:seq", jokeController.dislikeJoke);

module.exports = router;
