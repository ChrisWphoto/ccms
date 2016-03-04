var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <div className='loginWrapper' style={{textAlign:'center'}}>
        <span style={{fontSize: '5em', position: 'relative', top: '.7em', color:'white'}} >
          Welcome to CCMS
        </span>
        {this.props.children}

      </div>
    )
  }
})

module.exports = Home;
