var dispatcher = require('../dispatcher')

module.exports = {
    addTruck: function(truck) {
        dispatcher.dispatch({
            truck: truck,
            type: 'truck:addTruck'
        });
    },
    deleteTruck: function(truck) {
        dispatcher.dispatch({
            truck: truck,
            type: 'truck:deleteTruck'
        });
    }
};
