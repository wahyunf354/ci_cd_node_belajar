var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hello");
});

router.get("/cicd", function (req, res, next) {
  res.send("Belajar CI");
});

router.get("/post/:id", function (req, res, next) {
  res.send("Post" + req.params.id);
});

module.exports = router;
