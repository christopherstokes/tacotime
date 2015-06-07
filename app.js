var express = require('express');
var app = express();
var cloudinary = require('cloudinary');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
