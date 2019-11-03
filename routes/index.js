var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", function(req, res, next) {
  const check_url = req.query["url"];
  if (check_url) {
    axios.get(check_url).then((result) => {
      res.render("index", { title: "Communication Checker", url: check_url, result: result });
    });
  } else {
    res.render("index", { title: "Communication Checker" });
  }
});

module.exports = router;
