var dispatcher = require('../dispatcher');
var truckService = require('../services/truckService');

function TruckStore() {
    var listeners = [];

    function onChange(listener) {
        getTrucks(listener);
        listeners.push(listener);
    }

    function getTrucks(cb) {
        truckService.getTrucks().then(function (res) {
            cb(res);
        });
    }

    function addTruck(truck) {
        truckService.addTruck(truck).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteTruck(truck) {
        truckService.deleteTruck(truck).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getTrucks(function (res) {
            listeners.forEach(function(listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function(payload) {
        var split = payload.type.split(":");
        if (split[0] === 'truck') {
            switch (split[1]) {
                case 'addTruck':
                    addTruck(payload.truck);
                    break;
                case 'deleteTruck':
                    deleteTruck(payload.truck);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    };
}

module.exports = TruckStore();
