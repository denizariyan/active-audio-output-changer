var express = require('express');
var router = express.Router();
var exec = require("child_process").exec;
var path = require('path');
var fs = require('fs')

var linesExceptFirst = "";
var fileInputName = 'out.csv'; 



router.get('/', function(req, res, next) {
  var relPath = path.join(__dirname, '..', 'external', 'EndPointController.exe');
  var cmd = exec(relPath + " > out.csv");
  cmd.on('exit', function() {
    fs.readFile(fileInputName, 'utf8', function(err, data) {
      if (err) {
       console.log(err);
      }
      linesExceptFirst = data.split('\n').slice(1);
      linesExceptFirst = linesExceptFirst.toString().split(",")
  
  });
  })
  res.render('index', { Devices: linesExceptFirst });
});

module.exports = router;