var Controller, Pando, TERMINUS, activateAll, active, addTodo, completeAll, completed, connect, continueEditingAppState, continueEditingTodo, createTodo, editAppState, editTodo, endEditing, enterKey_question_, extractIndex, extractIndexAndValue, extractNewTodo, filtering, getDispatcher, getTodos, log, logSubscribe, mapping, removeCompleted, removeTodo, toggleAllTodos, toggleTodo, transformAppState, updateCount, updateMode, _ref;

_ref = require('../../vendor/reactive-aspen'), Controller = _ref.Controller, Pando = _ref.Pando;

connect = Controller.connect, getDispatcher = Controller.getDispatcher;

filtering = Pando.filtering, mapping = Pando.mapping;

TERMINUS = 'terminus';

log = function(label) {
  return function(event) {
    return console.log(label, event);
  };
};

logSubscribe = function(label) {
  return getDispatcher(label).subscribe(log(label));
};

['$toggle-all-clicks', '$new-todo-keydowns', '$toggle-clicks', '$destroy-clicks', '$clear-clicks', '$active-todos-clicks', '$all-todos-clicks', '$completed-todos-clicks', 'todo-in-edit', '$edit-blurs', '$edit-focuses', '$edit-keydowns', '$todo-label-doubleclicks'].forEach(logSubscribe);

activateAll = function(appState) {
  var todos;
  todos = appState.todos;
  todos.forEach(function(todo) {
    return todo.completed = false;
  });
  return appState.activeCount = todos.length;
};

addTodo = function(title) {
  return function(appState) {
    appState.todos.push(createTodo(title));
    appState.activeCount += 1;
    appState.count += 1;
    return appState;
  };
};

completeAll = function(appState) {
  appState.todos.forEach(function(todo) {
    return todo.completed = true;
  });
  return appState.activeCount = 0;
};

continueEditingTodo = function(todo, text) {
  return todo.editText = text;
};

continueEditingAppState = function(props) {
  var index, value;
  index = props.index, value = props.value;
  return function(appState) {
    var todos;
    todos = appState.todos;
    continueEditingTodo(todos[index], value);
    return appState;
  };
};

createTodo = function(title) {
  return {
    completed: false,
    editing: false,
    editText: '',
    title: title
  };
};

editTodo = function(todo) {
  todo.editing = true;
  todo.editText = todo.title;
  return todo;
};

editAppState = function(index) {
  return function(appState) {
    var todos;
    todos = appState.todos;
    todos[index] = editTodo(todos[index]);
    return appState;
  };
};

endEditing = function(capsule) {
  var index;
  index = capsule.index;
  return function(appState) {
    var todo;
    todo = appState.todos[index];
    todo.editing = false;
    todo.title = todo.editText;
    todo.editText = '';
    return appState;
  };
};

enterKey_question_ = function(capsule) {
  return capsule.event.keyCode === 13;
};

extractIndex = function(capsule) {
  return capsule.index;
};

extractIndexAndValue = function(capsule) {
  var index, value;
  index = capsule.index;
  value = capsule.event.target.value;
  return {
    index: index,
    value: value
  };
};

extractNewTodo = function(capsule) {
  var value;
  value = capsule.event.target.value.trim();
  capsule.event.target.value = '';
  return addTodo(value);
};

removeCompleted = function(appState) {
  appState.todos = appState.todos.filter(active);
  appState.activeCount = appState.count = appState.todos.length;
  return appState;
};

removeTodo = function(index) {
  return function(appState) {
    var completed, todos;
    todos = appState.todos;
    completed = todos[index].completed;
    todos.splice(index, 1);
    if (!completed) {
      appState.activeCount -= 1;
    }
    appState.count -= 1;
    return appState;
  };
};

toggleAllTodos = function(appState) {
  var manage;
  manage = appState.activeCount === 0 ? activateAll : completeAll;
  manage(appState);
  return appState;
};

toggleTodo = function(index) {
  return function(appState) {
    var activeCount, completed, mode, todo, todos;
    activeCount = appState.activeCount, mode = appState.mode, todos = appState.todos;
    todo = getTodos(mode, todos)[index];
    completed = todo.completed;
    appState.activeCount = updateCount(activeCount, completed);
    todo.completed = !completed;
    return appState;
  };
};

transformAppState = function(transform) {
  return function(appState) {
    transform(appState);
    return appState;
  };
};

updateCount = function(nbr, completed) {
  var addend;
  addend = completed ? 1 : -1;
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

connect('$clear-clicks')(TERMINUS)(function() {
  return mapping(function() {
    return removeCompleted;
  });
});

connect('$new-todo-keydowns')(TERMINUS)(function() {
  return function(__i) {
    return filtering(enterKey_question_)(mapping(extractNewTodo)(__i));
  };
});

connect('$destroy-clicks')(TERMINUS)(function() {
  return mapping(function(capsule) {
    return removeTodo(extractIndex(capsule));
  });
});

connect('$todo-label-doubleclicks')(TERMINUS)(function() {
  return mapping(function(capsule) {
    return editAppState(extractIndex(capsule));
  });
});

connect('todo-in-edit')(TERMINUS)(function() {
  return mapping((function(__i) {
    return continueEditingAppState(extractIndexAndValue(__i));
  }));
});

connect('$edit-keydowns')(TERMINUS)(function() {
  return function(__i) {
    return filtering(enterKey_question_)(mapping(endEditing)(__i));
  };
});

module.exports = null;
