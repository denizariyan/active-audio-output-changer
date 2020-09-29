var express = require('express');
var router = express.Router();
const { spawn } = require("child_process");
var exec = require("child_process").exec;
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  var relPath = path.join(__dirname, '..', 'external', 'EndPointController.exe');
  var cmd = exec(relPath + " > out.csv");
  res.render('index', { Devices: data['Devices'] });
});

module.exports = router;

