var $text, AppHeader, Bridge, React, h1, header, todoInput, todosCaption, _ref, _ref1;

_ref = require('../../vendor/reactive-aspen'), Bridge = _ref.Bridge, React = _ref.React;

_ref1 = React.DOM, h1 = _ref1.h1, header = _ref1.header;

$text = Bridge.adapters.$text;

todosCaption = function() {
  return h1(null, 'todos');
};

todoInput = $text('new-todo-input');

AppHeader = function(focus) {
  return header({
    id: 'header'
  }, todosCaption(), todoInput({
    id: 'new-todo',
    placeholder: 'What needs to be done?',
    onKeyDown: true,
    autoFocus: focus
  }));
};

module.exports = AppHeader;
