var mongoose = require('mongoose');
var truckSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model('truck', truckSchema);
