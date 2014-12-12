var active, activeTodoCount, all, bodyProps, completed, count, footerProps, mode, p, r, t, todos;

todos = [
  t = {
    completed: false,
    editing: false,
    editText: '',
    title: 'think'
  }, p = {
    completed: true,
    editing: false,
    editText: '',
    title: 'ponder'
  }, r = {
    completed: false,
    editing: false,
    editText: '',
    title: 'reflect'
  }
];

all = todos;

active = [t, r];

completed = [p];

mode = all;

activeTodoCount = 1;

count = 3;

bodyProps = {
  activeTodoCount: activeTodoCount,
  count: count,
  todos: todos
};

footerProps = {
  active: active,
  activeTodoCount: activeTodoCount,
  all: all,
  completed: completed,
  count: count,
  mode: mode,
  todos: todos
};

module.exports = {
  bodyProps: bodyProps,
  footerProps: footerProps
};
