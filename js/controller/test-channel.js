var Controller, Pando, completeAllTodos, connect, getDispatcher, log, logSubscribe, mapping, _ref;

_ref = require('../../vendor/reactive-aspen'), Controller = _ref.Controller, Pando = _ref.Pando;

connect = Controller.connect, getDispatcher = Controller.getDispatcher;

mapping = Pando.mapping;

log = function(label) {
  return function(event) {
    return console.log(label, event);
  };
};

logSubscribe = function(label) {
  return getDispatcher(label).subscribe(log(label));
};

['$toggle-all-clicks', 'new-todo', '$toggle-clicks', '$destroy-clicks', '$clear-clicks', '$active-todos-clicks', '$all-todos-clicks', '$completed-todos-clicks', 'todo-in-edit', '$todo-label-doubleclicks', 'terminus'].forEach(logSubscribe);

completeAllTodos = function(appState) {
  appState.footerProps.completed = appState.footerProps.all;
  return appState;
};

connect('$toggle-clicks')('terminus')(function() {
  return mapping(function() {
    return completeAllTodos;
  });
});

module.exports = null;
