var $button, $checkbox, $label, $text, AutoPostFocusMixin, Bridge, DOM, Mixins, React, TodoItem, TodoItemInput, adapters, addons, applyIndex, classSet, completionToggle, destroyButton, div, factories, fields, includeIndex, indexifyAdapter, li, sensitize, todoItemInput, todoItemLabel, _ref, _ref1;

_ref = require('../../vendor/reactive-aspen'), Bridge = _ref.Bridge, Mixins = _ref.Mixins, React = _ref.React;

adapters = Bridge.adapters, sensitize = Bridge.sensitize;

AutoPostFocusMixin = Mixins.AutoPostFocusMixin;

$button = adapters.$button, $checkbox = adapters.$checkbox, $label = adapters.$label, $text = adapters.$text;

addons = React.addons, DOM = React.DOM;

classSet = addons.classSet;

div = DOM.div, li = DOM.li;

applyIndex = function(index) {
  return function(adapter) {
    return adapter(index);
  };
};

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

TodoItem = function(todoProps, index) {
  var className, completed, editText, editing, focus, title, _TodoItemInput, _completionToggle, _destroyButton, _ref1, _todoItemLabel;
  completed = todoProps.completed, editing = todoProps.editing, editText = todoProps.editText, focus = todoProps.focus, title = todoProps.title;
  className = classSet({
    completed: completed,
    editing: editing
  });
  _ref1 = factories.map(applyIndex(index)), _completionToggle = _ref1[0], _destroyButton = _ref1[1], _TodoItemInput = _ref1[2], _todoItemLabel = _ref1[3];
  return li({
    key: "todo-item-" + title,
    className: className
  }, div({
    className: 'view'
  }, _completionToggle({
    className: 'toggle',
    checked: completed,
    onChange: true
  }), _todoItemLabel({
    onDoubleClick: true
  }, title), _destroyButton({
    className: 'destroy',
    onClick: true
  })), _TodoItemInput({
    className: 'edit',
    defaultValue: editText,
    onBlur: true,
    onChange: true,
    onKeyDown: true,
    sensitiveProps: {
      autoPostFocus: focus,
      key: 'todo-item-input' + index
    }
  }));
};

TodoItemInput = function(index) {
  return sensitize({
    index: index,
    label: 'TodoItemInput'
  })(todoItemInput(index), AutoPostFocusMixin);
};

fields = [[$checkbox, 'completion-toggle'], [$button, 'destroy-button'], [$text, 'todo-item-input'], [$label, 'todo-item-label']];

_ref1 = fields.map(indexifyAdapter), completionToggle = _ref1[0], destroyButton = _ref1[1], todoItemInput = _ref1[2], todoItemLabel = _ref1[3];

factories = [completionToggle, destroyButton, TodoItemInput, todoItemLabel];

module.exports = TodoItem;
