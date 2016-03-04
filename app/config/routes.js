var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Login = require('../components/Login');
var Router = require('react-router');
var Dashboard = require('../components/Dashboard');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Login} />
    <Route component={Home}>
        <Route path='dashboard' component={Dashboard} />
    </Route>
  </Route>
);
