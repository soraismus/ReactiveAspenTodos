var blur, todoItemInput;

blur = {
  blur: true
};

todoItemInput = 'TodoItemInput';

module.exports = [
  ['$new-todo-keydowns', 'NewTodoInput'], ['$todo-label-doubleclicks', 'TodoItemLabel'], ['$clear-clicks', 'ClearButton'], ['$delete-clicks', 'DeleteButton'], ['$toggle-all-clicks', 'ToggleAll', blur], ['$toggle-clicks', 'Toggle', blur], [
    '$edit-blurs', todoItemInput, {
      handler: 'onBlur'
    }
  ], [
    '$edit-keydowns', todoItemInput, {
      handler: 'onKeyDown'
    }
  ], [
    'todo-in-edit', todoItemInput, {
      handler: 'onChange'
    }
  ]
];