var express = require('express');
var router = express.Router();

var user=require("../public/test.json")
var user1=require("../public/test1.json")
//var user2=require("../routes/controller.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', user);
});

router.get('/index1', function(req, res, next) {
  res.render('index1', user1);
});


module.exports = router;
