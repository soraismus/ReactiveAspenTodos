var preventDefault;

preventDefault = {
  preventDefault: true
};

module.exports = [['$toggle-all-clicks', 'toggle-all-checkbox'], ['$toggle-clicks', 'completion-toggle'], ['$destroy-clicks', 'destroy-button'], ['$clear-clicks', 'ClearButton'], ['new-todo', 'new-todo-input'], ['todo-in-edit', 'todo-item-input'], ['$todo-label-doubleclicks', 'todo-item-label'], ['$active-todos-clicks', 'ActiveTodos', preventDefault], ['$all-todos-clicks', 'AllTodos', preventDefault], ['$completed-todos-clicks', 'CompletedTodos', preventDefault]];
