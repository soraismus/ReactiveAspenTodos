var active, all, bodyProps, completed, footerProps, mode, todos;

todos = [
  {
    completed: false,
    editing: false,
    editText: '',
    title: 'think'
  }
];

active = all = mode = todos;

completed = [];

bodyProps = {
  activeTodoCount: 1,
  count: 1,
  todos: todos
};

footerProps = {
  active: active,
  all: all,
  todos: todos,
  completed: completed,
  mode: mode
};

module.exports = {
  bodyProps: bodyProps,
  footerProps: footerProps
};
