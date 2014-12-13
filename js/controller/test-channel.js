var Controller, Pando, completeAllTodos, connect, extractIndex, getDispatcher, log, logSubscribe, mapping, updateCount, _ref;

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

completeAllTodos = function(index) {
  return function(appState) {
    var activeTodoCount, all, completed, footerProps, todo, _ref1;
    footerProps = appState.footerProps;
    _ref1 = appState.footerProps, activeTodoCount = _ref1.activeTodoCount, all = _ref1.all;
    todo = all[index];
    completed = todo.completed;
    footerProps.activeTodoCount = updateCount(activeTodoCount, completed);
    todo.completed = !completed;
    return appState;
  };
};

extractIndex = function(capsule) {
  return capsule.index;
};

updateCount = function(nbr, completed) {
  var addend;
  addend = completed ? -1 : 1;
  return nbr + addend;
};

connect('$toggle-clicks')('terminus')(function() {
  return mapping(function(capsule) {
    return completeAllTodos(extractIndex(capsule));
  });
});

module.exports = null;
