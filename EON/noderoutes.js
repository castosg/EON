var express = require("express");
var router = express.Router();

module.exports = router;

router.get("/eonEdit", function(req, res){
  console.log("We got to the get");
  res.send("A thing");
});
