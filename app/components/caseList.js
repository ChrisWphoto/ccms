var React = require('react');


var CaseList = React.createClass({

  render: function() {
    var cases = this.props.cases.map(function(thisCase){
      return(
        <li className="list-group-item">
          Case ID: {thisCase.id}, Date Created: {thisCase.dateCreated},
          Type: <b>{thisCase.mainType}</b>, Current Status: {thisCase.currentStatus}
        </li>
    )
    })
    return (
      <ul className="list-group">
        {cases}
      </ul>
    );
  }

});

module.exports = CaseList;
