var $button, $checkbox, $label, $text, Bridge, DOM, React, TodoItem, TodoItemInput, adapters, addons, classSet, completionToggle, destroyButton, div, fields, includeIndex, indexifyAdapter, li, sensitize, todoItemInput, todoItemLabel, _ref, _ref1;

_ref = require('../../vendor/reactive-aspen'), Bridge = _ref.Bridge, React = _ref.React;

adapters = Bridge.adapters, sensitize = Bridge.sensitize;

$button = adapters.$button, $checkbox = adapters.$checkbox, $label = adapters.$label, $text = adapters.$text;

addons = React.addons, DOM = React.DOM;

classSet = addons.classSet;

div = DOM.div, li = DOM.li;

fields = [[$checkbox, 'completion-toggle'], [$button, 'destroy-button'], [$text, 'todo-item-input'], [$label, 'todo-item-label']];

includeIndex = function(label, index) {
  return {
    index: index,
    label: label
  };
};

indexifyAdapter = function(_arg) {
  var adapter, label;
  adapter = _arg[0], label = _arg[1];
  return function(index) {
    return adapter(includeIndex(label, index));
  };
};

_ref1 = fields.map(indexifyAdapter), completionToggle = _ref1[0], destroyButton = _ref1[1], todoItemInput = _ref1[2], todoItemLabel = _ref1[3];

TodoItemInput = function(index) {
  return sensitize({
    index: index,
    label: 'TodoItemInput'
  })(todoItemInput(index));
};

TodoItem = function(todoProps, index) {
  var className, completed, editText, editing, title;
  completed = todoProps.completed, editing = todoProps.editing, editText = todoProps.editText, title = todoProps.title;
  className = classSet({
    completed: completed,
    editing: editing
  });
  return li({
    key: "todo-item-" + title,
    className: className
  }, div({
    className: 'view'
  }, completionToggle(index)({
    className: 'toggle',
    checked: completed,
    onChange: true
  }), todoItemLabel(index)({
    onDoubleClick: true
  }, title), destroyButton(index)({
    className: 'destroy',
    onClick: true
  })), TodoItemInput(index)({
    className: 'edit',
    key: 'todo-item-input' + index,
    defaultValue: editText,
    onBlur: true,
    onChange: true,
    onKeyDown: true
  }));
};

module.exports = TodoItem;
