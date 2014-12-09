var app = app || {};

(function () {
  var ALL_TODOS       = 'all',
      ACTIVE_TODOS    = 'active',
      COMPLETED_TODOS = 'completed';

  var TodoFooter = app.TodoFooter,
      TodoItem   = app.TodoItem;

  var ENTER_KEY = 13;

  var TodoApp = function () {
    return _div(
      header(
        { id: 'header' },
        _h1('todos'),
        input({
          ref         : 'newField',
          id          : 'new-todo',
          placeholder : 'What needs to be done?',
          onKeyDown   : true,
          autofocus   : true
        })
      ),
      main(),
      footer()
    );
  };
