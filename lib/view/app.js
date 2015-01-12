var AppBody, AppFooter, AppHeader, TodoApp, div;

div = require('../../vendor/reactive-aspen').React.DOM.div;

AppBody = require('./body');

AppFooter = require('./footer');

AppHeader = require('./header');

TodoApp = function(appState) {
  return div(null, AppHeader(appState.focus), AppBody(appState), AppFooter(appState));
};

module.exports = TodoApp;
