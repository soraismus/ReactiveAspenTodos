var app = app || {};

app.body = function (config) {
  'use strict';
  return section(
    { id: 'main' },
    input({
      id       : 'toggle-all',
      type     : 'checkbox',
      onChange : true,
      checked  : config.checked
    }),
    ul({ id: 'todo-list' }, config.todoItems)
  );
};
