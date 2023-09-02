var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hello");
});

router.get("/cicd", function (req, res, next) {
  res.send("Belajar CI");
});

router.get("/post/:id", function (req, res, next) {
  res.send("Post " + req.params.id);
});

router.get("/comment", function (req, res, next) {
  res.send("Comment");
});
module.exports = router;
