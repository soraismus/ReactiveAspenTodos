var $checkbox, AppBody, Bridge, React, TodoItem, active, completed, getTodos, mainToggle, section, ul, _ref, _ref1;

_ref = require('../../vendor/reactive-aspen'), Bridge = _ref.Bridge, React = _ref.React;

TodoItem = require('./todoItem');

_ref1 = React.DOM, section = _ref1.section, ul = _ref1.ul;

$checkbox = Bridge.adapters.$checkbox;

mainToggle = $checkbox('toggle-all-checkbox');

active = function(todo) {
  return !todo.completed;
};

AppBody = function(props) {
  var activeCount, count, mode, todoItems, todos;
  activeCount = props.activeCount, count = props.count, mode = props.mode, todos = props.todos;
  if (!(count > 0)) {
    return null;
  }
  todoItems = getTodos(todos, mode).map(TodoItem);
  return section({
    id: 'main'
  }, mainToggle({
    id: 'toggle-all',
    onChange: true,
    checked: activeCount === 0
  }), ul({
    id: 'todo-list'
  }, todoItems));
};

completed = function(todo) {
  return todo.completed;
};

getTodos = function(todos, mode) {
  switch (mode) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(active);
    case 'completed':
      return todos.filter(completed);
  }
};

module.exports = AppBody;
