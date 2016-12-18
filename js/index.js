require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var ContactListContainer = require('./components/contact-list-container');

var routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={ContactListContainer} />
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});

