var $button, $checkbox, $label, $text, Bridge, DOM, React, TodoItem, addons, classSet, completionToggle, destroyButton, div, fields, includeIndex, indexifyAdapter, li, todoItemInput, todoItemLabel, _ref, _ref1, _ref2;

_ref = require('../../vendor/reactive-aspen'), Bridge = _ref.Bridge, React = _ref.React;

addons = React.addons, DOM = React.DOM;

classSet = addons.classSet;

div = DOM.div, li = DOM.li;

_ref1 = Bridge.adapters, $button = _ref1.$button, $checkbox = _ref1.$checkbox, $label = _ref1.$label, $text = _ref1.$text;

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

_ref2 = fields.map(indexifyAdapter), completionToggle = _ref2[0], destroyButton = _ref2[1], todoItemInput = _ref2[2], todoItemLabel = _ref2[3];

TodoItem = function(todoProps, index) {
  var className, completed, editText, editing, title;
  completed = todoProps.completed, editing = todoProps.editing, editText = todoProps.editText, title = todoProps.title;
  className = classSet({
    completed: completed,
    editing: editing
  });
  return li({
    key: "todo-item-" + index,
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
  })), todoItemInput(index)({
    className: 'edit',
    value: editText,
    onBlur: true,
    onChange: true,
    onKeyDown: true
  }));
};

module.exports = TodoItem;