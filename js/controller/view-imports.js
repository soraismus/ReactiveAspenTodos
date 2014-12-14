var onChange, onKeyDown, preventDefault;

onChange = {
  handler: 'onChange'
};

onKeyDown = {
  handler: 'onKeyDown'
};

preventDefault = {
  preventDefault: true
};

module.exports = [['$toggle-all-clicks', 'toggle-all-checkbox'], ['$toggle-clicks', 'completion-toggle'], ['$destroy-clicks', 'destroy-button'], ['$clear-clicks', 'ClearButton'], ['$todo-label-doubleclicks', 'todo-item-label'], ['todo-in-edit', 'todo-item-input'], ['$new-todo-keydowns', 'new-todo-input'], ['$active-todos-clicks', 'ActiveTodos', preventDefault], ['$all-todos-clicks', 'AllTodos', preventDefault], ['$completed-todos-clicks', 'CompletedTodos', preventDefault]];
