var React = require("react");
var actions = require("../actions/TruckActions");

module.exports = React.createClass({
    deleteTruck: function(e) {
        e.preventDefault();
        actions.deleteTruck(this.props.info);
    },
    render: function() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteTruck}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
            </div>
        );
    }
});
