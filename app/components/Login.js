var React = require('react');
var Router = require('react-router');
import { Link } from 'react-router';
import { Navigation } from 'react-router'

var  Login = React.createClass({

  onChange: function(e) {
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  },

  selectUserType: function (userType) {
    let state = {};
    state.userType= userType;
    this.setState(state);
  },

  submitForm: function () {
    console.log(this.state);
    window.localStorage.setItem('user', JSON.stringify(this.state));
  },

  render: function() {

    return (
        
        <div className="wrapper" style={{textAlign: 'center'}} >
           <form className="form-signin">
             <h2 className="form-signin-heading">Please login</h2>

             <input type="text" className="form-control" name="firstName"
               placeholder="First Name" onChange={this.onChange} required="true" autofocus="" />
             <input type="text" className="form-control" name="LastName"
               placeholder="Last Name" onChange={this.onChange} required="true"/>

           <br/>
             <h2> Select User Type </h2>
             <div className="btn-group" style={{margin: '25px auto'}} role="group" aria-label="...">
                <button type="button" name="caseMngr" onClick={this.selectUserType.bind(this, 'Case Manager')} className="btn btn-default"> <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span> Case Manager</button>
                <button type="button" name='admin' onClick={this.selectUserType.bind(this, 'Admin')} className="btn btn-default"><span className="glyphicon glyphicon-globe" aria-hidden="true"></span> Admin</button>
             </div>
             <br/><br/>
             <Link to='/dashboard' className="btn btn-lg btn-primary btn-block" onClick={this.submitForm}  >  Login</Link>

           </form>
         </div>
    );
  }

});

module.exports = Login;
