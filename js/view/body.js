var $checkbox, AppBody, Bridge, React, TodoItem, mainToggle, section, ul, _ref, _ref1;

_ref = require('../../vendor/reactive-aspen'), Bridge = _ref.Bridge, React = _ref.React;

TodoItem = require('./todoItem');

_ref1 = React.DOM, section = _ref1.section, ul = _ref1.ul;

$checkbox = Bridge.adapters.$checkbox;

mainToggle = $checkbox('toggle-all-checkbox');

AppBody = function(props) {
  var activeTodoCount, count, todoItems, todos;
  activeTodoCount = props.activeTodoCount, count = props.count, todos = props.todos;
  if (!(count > 0)) {
    return null;
  }
  todoItems = todos.map(TodoItem);
  return section({
    id: 'main'
  }, mainToggle({
    id: 'toggle-all',
    onChange: true,
    checked: activeTodoCount === 0
  }), ul({
    id: 'todo-list'
  }, todoItems));
};

module.exports = AppBody;
