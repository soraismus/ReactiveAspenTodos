var button, checkbox, label, link, text, _ref;

_ref = ['button', 'checkbox', 'label', 'link', 'text'], button = _ref[0], checkbox = _ref[1], label = _ref[2], link = _ref[3], text = _ref[4];

module.exports = [[checkbox, 'toggle-all-checkbox', '$toggle-all-clicks'], [checkbox, 'completion-toggle', '$toggle-clicks'], [button, 'destroy-button', '$destroy-clicks'], [button, 'ClearButton', '$clear-clicks'], [link, 'ActiveTodos', '$active-todos-clicks'], [link, 'AllTodos', '$all-todos-clicks'], [link, 'CompletedTodos', '$completed-todos-clicks'], [text, 'new-todo-input', 'new-todo'], [text, 'todo-item-input', 'todo-in-edit'], [label, 'todo-item-label', '$todo-label-doubleclicks']];
