var Controller, Pando, TERMINUS, activateAllTodos, active, completed, connect, extractIndex, getDispatcher, getTodos, log, logSubscribe, mapping, toggleAllTodos, toggleTodo, updateCount, updateMode, _ref;

_ref = require('../../vendor/reactive-aspen'), Controller = _ref.Controller, Pando = _ref.Pando;

connect = Controller.connect, getDispatcher = Controller.getDispatcher;

mapping = Pando.mapping;

TERMINUS = 'terminus';

log = function(label) {
  return function(event) {
    return console.log(label, event);
  };
};

logSubscribe = function(label) {
  return getDispatcher(label).subscribe(log(label));
};

['$toggle-all-clicks', 'new-todo', '$toggle-clicks', '$destroy-clicks', '$clear-clicks', '$active-todos-clicks', '$all-todos-clicks', '$completed-todos-clicks', 'todo-in-edit', '$todo-label-doubleclicks', 'terminus'].forEach(logSubscribe);

activateAllTodos = function(appState) {
  appState.todos.forEach(function(todo) {
    return todo.completed = false;
  });
  return appState.activeTodoCount = 0;
};

extractIndex = function(capsule) {
  return capsule.index;
};

toggleAllTodos = function(appState) {
  var i, todo, todos, _i, _len;
  todos = appState.todos;
  for (i = _i = 0, _len = todos.length; _i < _len; i = ++_i) {
    todo = todos[i];
    if (todo.completed) {
      activateAllTodos(appState);
      return appState;
    }
    todo.completed = true;
    appState.activeTodoCount += 1;
  }
  return appState;
};

toggleTodo = function(index) {
  return function(appState) {
    var activeTodoCount, completed, mode, todo, todos;
    activeTodoCount = appState.activeTodoCount, mode = appState.mode, todos = appState.todos;
    todo = getTodos(mode, todos)[index];
    completed = todo.completed;
    appState.activeTodoCount = updateCount(activeTodoCount, completed);
    todo.completed = !completed;
    return appState;
  };
};

updateCount = function(nbr, completed) {
  var addend;
  addend = completed ? -1 : 1;
  return nbr + addend;
};

updateMode = function(newMode) {
  return function(appState) {
    appState.mode = newMode;
    return appState;
  };
};

active = function(todo) {
  return !todo.completed;
};

completed = function(todo) {
  return todo.completed;
};

getTodos = function(mode, todos) {
  switch (mode) {
    case 'active':
      return todos.filter(active);
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(completed);
  }
};

connect('$toggle-clicks')(TERMINUS)(function() {
  return mapping(function(capsule) {
    return toggleTodo(extractIndex(capsule));
  });
});

connect('$active-todos-clicks')(TERMINUS)(function() {
  return mapping(function() {
    return updateMode('active');
  });
});

connect('$all-todos-clicks')(TERMINUS)(function() {
  return mapping(function() {
    return updateMode('all');
  });
});

connect('$completed-todos-clicks')(TERMINUS)(function() {
  return mapping(function() {
    return updateMode('completed');
  });
});

connect('$toggle-all-clicks')(TERMINUS)(function() {
  return mapping(function() {
    return toggleAllTodos;
  });
});

module.exports = null;
