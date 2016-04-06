var mongoose = require('mongoose');
var Truck = require('../data/truck');
var _ = require('underscore');

var router = require('express').Router();
router.route('/trucks/:id?').get(getTrucks).post(addTruck).delete(deleteTruck);

function getTrucks(req, res) {
    Truck.find(function(err, trucks) {
        if (err)
            res.send(err);
        else
            res.json(trucks);
    });
}

function addTruck(req, res) {
    var truck = new Truck(_.extend({}, req.body));
    truck.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(truck);
    });
}

function deleteTruck(req, res) {
    var id = req.params.id;
    Truck.remove({_id: id}, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
