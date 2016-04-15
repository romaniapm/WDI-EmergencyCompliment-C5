var express = require('express');
var router = express.Router();

var compliments = [
  "You're Great",
  "Hello",
  "Awesome",
  "I Did That",
  "AAhh Yeah",
  "You're Giving Me Life",
  "Do That Thang"
  ];
var colors = [
  "blue",
  "green",
  "orange",
  "purple",
  "turqoise",
  "yellow",
  "silver",
  ];
  function randomComp() {
    return compliment = compliments[Math.floor(Math.random()*compliments.length)]
}

function randomColor() {
    return color = colors[Math.floor(Math.random()*colors.length)]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  randomComp();
  randomColor();
  res.render('index', {
    compliment: compliment,
    title: "WDI Emergency Compliment",
    color: color });
});

module.exports = router;
