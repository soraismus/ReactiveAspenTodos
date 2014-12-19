var $router_hyphen_events, Controller, Pando, TERMINUS, activateAll, active, addTodo, checkValue, completeAll, completed, connect, continueEditingAppState, continueEditingTodo, createTodo, editAppState, editTodo, endEditing, enterKey_question_, extractIndex, extractIndexAndValue, extractNewTodo, filtering, getDispatcher, getProperty, getTitle, getTodos, mapping, removeCompleted, removeTodo, router, setModeTo, storeTitle, storeTitleForIndex, toggleAllTodos, toggleTodo, transformAppState, updateCount, updateMode, _ref, _ref1;

_ref = require('../../vendor/reactive-aspen'), Controller = _ref.Controller, Pando = _ref.Pando;

connect = Controller.connect, getDispatcher = Controller.getDispatcher, getProperty = Controller.getProperty;

checkValue = Pando.checkValue, filtering = Pando.filtering, mapping = Pando.mapping;

TERMINUS = 'terminus';

$router_hyphen_events = getDispatcher('$router-events', true);

setModeTo = function(mode) {
  return function() {
    return $router_hyphen_events.dispatch(mode);
  };
};

router = Router({
  '/': setModeTo('all'),
  '/active': setModeTo('active'),
  '/completed': setModeTo('completed')
});

router.init('/');

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
    if (!title) {
      return appState;
    }
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
  return todo.title = text;
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
    editText: null,
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
    todo.title = getTitle().trim();
    if (todo.title) {
      return appState;
    } else {
      return removeTodo(index)(appState);
    }
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

_ref1 = (function() {
  var getTitle, storeTitle, _title;
  _title = null;
  getTitle = function() {
    return _title;
  };
  storeTitle = function(title) {
    return _title = title;
  };
  return [getTitle, storeTitle];
})(), getTitle = _ref1[0], storeTitle = _ref1[1];

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

storeTitleForIndex = function(appState, capsule) {
  return storeTitle(appState.todos[capsule.index].title);
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

connect('$router-events')(TERMINUS)(function() {
  return mapping(updateMode);
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

connect('$todo-label-doubleclick')('index')(function() {
  return mapping(extractIndex);
});

connect('$todo-label-doubleclicks')(TERMINUS)(function() {
  return mapping(function(capsule) {
    return editAppState(extractIndex(capsule));
  });
});

getDispatcher('$todo-label-doubleclicks').subscribe(function(capsule) {
  return checkValue(storeTitleForIndex)(getProperty('app-state'), capsule);
});

getDispatcher('todo-in-edit').subscribe(function(capsule) {
  return storeTitle(capsule.event.target.value);
});

connect('$edit-keydowns')(TERMINUS)(function() {
  return function(__i) {
    return filtering(enterKey_question_)(mapping(endEditing)(__i));
  };
});

connect('$edit-blurs')(TERMINUS)(function() {
  return mapping(endEditing);
});

module.exports = null;
