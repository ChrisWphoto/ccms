var React = require('react');
var Router = require('react-router');
var CaseList = require('./caseList');
var helpers = require('../utils/helpers');



var Dashboard = React.createClass({
  getInitialState: function(){
    return {
      cases: []
    }
  },
  componentDidMount: function() {
    helpers.getDashboardInfo()
      .then(function(allCases){
        this.setState({cases: allCases})
    }.bind(this))
  },
  render: function() {
    console.log('this.state.cases', this.state.cases);
    return (
      <div className="container">
      <h3> Cases for {this.props.params.username} </h3>
      <CaseList cases={this.state.cases}/>
      </div>
    );
  }

});

module.exports = Dashboard;
