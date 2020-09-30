var express = require('express');
var router = express.Router();
const { spawn } = require("child_process");
var exec = require("child_process").exec;
var path = require('path');
let csvToJson = require('convert-csv-to-json');
var fs = require('fs')
var linesExceptFirst = "";

let fileInputName = 'out.csv'; 
let fileOutputName = 'out.json';
const regex = /'/gi;

/* GET home page. */
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
      console.log(linesExceptFirst);
  
  });
  })
  res.render('index', { Devices: linesExceptFirst });
});

module.exports = router;