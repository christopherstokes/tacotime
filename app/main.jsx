var React = require('react');
var ReactDOM = require('react-dom');
var TrucksList = require('./components/TrucksList.jsx');
var trucksStore = require('./stores/trucksStore');
var _trucks = [];
var getTrucksCallback = function(trucks) {
    _trucks = trucks;
    render();
}

trucksStore.onChange(getTrucksCallback)

function render() {
    ReactDOM.render(<TrucksList trucks={_trucks} />,
                    document.getElementById('container'));
}

render();
