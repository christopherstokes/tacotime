var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var config = require('../config');

// controllers
var truckController = require('./controllers/truckController');

// Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json());
app.use('/api', truckController);

app.listen(3000, function() {
    console.log("Started listening on port", 3000);
});

// connect to mongodb database
mongoose.connect(config.mongoLink);


