var React = require('react');
var TruckInfo = require('./TruckInfo.jsx');
var AddTruck = require('./AddTruck.jsx')

module.exports = React.createClass({
    render: function() {
        return(
            <div className="row">
              <div className="col-md-6">
                  <AddTruck />
              </div>
              <div className="col-md-6">
                {
                    this.props.trucks.map(function(s, index) {
                        return(
                            <TruckInfo info={s} key={"truck"+index} />
                        );
                    })
                }
            </div>
          </div>
        );
    }
});
