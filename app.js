var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var cloudinary = require('cloudinary');
var gm = require('googlemaps');
var bodyParser = require('body-parser');
var fs = require('fs');

// config file is included here:
eval(fs.readFileSync('config.js')+'');

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser());

app.post('/truck-submit', urlencodedParser, function (req, res) {
  console.log('You sent the name "' + req.body.name + '".');
});
