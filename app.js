var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var cloudinary = require('cloudinary');
var gm = require('googlemaps');
var fs = require('fs');

// file is included here:
eval(fs.readFileSync('config.js')+'');

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
