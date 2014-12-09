var app = app || {};

(function () {
  'use strict';

  var model = new app.TodoModel('react-todos');

  React.render(
    app.TodoApp({ model: model }),
    document.getElementById('todoapp')
  );
})();
