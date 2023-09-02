var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hello");
});

router.get("/cicd", function (req, res, next) {
  res.send("Belajar CI");
});

module.exports = router;
