var express = require("express");
var router = express.Router();
const jokeController = require("../controllers/jokeController");
const userController = require("../controllers/userController");

/* GET home page. */
router.get("/getAllJoke", jokeController.getAllJoke);
router.post("/createJoke", jokeController.createJoke);
router.get("/getOneJokeBySeq/:seq", jokeController.getOneJokeBySeq);

router.get(
  "/getOneNextJoke",
  userController.checkCookies,
  jokeController.getOneNextJoke
);

router.get(
  "/getOneCurrentJoke",
  userController.checkCookies,
  jokeController.getOneCurrentJoke
);

router.patch("/likeJoke/:seq", jokeController.likeJoke);
router.patch("/dislikeJoke/:seq", jokeController.dislikeJoke);

module.exports = router;
