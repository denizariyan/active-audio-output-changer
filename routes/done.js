var express = require('express');
var router = express.Router();
var exec = require("child_process").exec;
var path = require('path');


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/", function (req, res, next) {
  res.render('done', {
    output: `Output set as: ${req.body.dropDown}`
  })
  var toSet = parseInt(req.body.dropDown) + 1
  var relPath = path.join(__dirname, '..', 'external', 'EndPointController.exe ');
  exec(relPath + toSet);
})

module.exports = router;