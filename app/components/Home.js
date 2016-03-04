var React = require('react');

var Home = React.createClass({

  getInitialState: function(){

     return {
       userInfo: JSON.parse(window.localStorage.getItem('user'))
     }
   },

  render: function(){
    return(
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7" style={{marginTop: 15}}>
          <span className="glyphicon glyphicon-user"> {this.state.userInfo.firstName} {this.state.userInfo.LastName}</span>
          </div>
        </nav>
          {this.props.children}


      </div>
    )
  }
})

module.exports = Home;
