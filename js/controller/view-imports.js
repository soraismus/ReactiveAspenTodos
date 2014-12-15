var onBlur, onChange, onKeyDown, preventDefault, todoItemInput;

onBlur = {
  handler: 'onBlur'
};

onChange = {
  handler: 'onChange'
};

onKeyDown = {
  handler: 'onKeyDown'
};

preventDefault = {
  preventDefault: true
};

todoItemInput = 'todo-item-input';

module.exports = [['$toggle-all-clicks', 'toggle-all-checkbox'], ['$toggle-clicks', 'completion-toggle'], ['$destroy-clicks', 'destroy-button'], ['$clear-clicks', 'ClearButton'], ['$todo-label-doubleclicks', 'todo-item-label'], ['$new-todo-keydowns', 'new-todo-input'], ['$edit-blurs', todoItemInput, onBlur], ['todo-in-edit', todoItemInput, onChange], ['$edit-keydowns', todoItemInput, onKeyDown], ['$active-todos-clicks', 'ActiveTodos', preventDefault], ['$all-todos-clicks', 'AllTodos', preventDefault], ['$completed-todos-clicks', 'CompletedTodos', preventDefault]];
