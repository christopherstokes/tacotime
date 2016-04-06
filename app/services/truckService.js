var $ = require('jquery');
var promise = require('es6-promise');
var resourceUrl = 'http://localhost:7777/api/trucks';

module.exports = {
    addTruck: function (truck) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(truck),
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                success: resolve,
                error: reject
            });
        });
    },
    getTrucks: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: 'GET',
                dataType: 'json',
                success: resolve,
                error: reject
            });
        });
    },
    deleteTruck: function (truck) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl + '/' + truck._id,
                method: 'DELETE',
                dataType: 'json',
                success: resolve,
                error: reject
            });
        });
    }
};
