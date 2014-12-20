var activeCount, count, focus, mode, todos;

activeCount = 2;

count = 3;

focus = true;

mode = 'all';

todos = [
  {
    completed: false,
    editing: false,
    editText: null,
    focus: false,
    title: 'think'
  }, {
    completed: true,
    editing: false,
    editText: null,
    focus: false,
    title: 'ponder'
  }, {
    completed: false,
    editing: false,
    editText: null,
    focus: false,
    title: 'reflect'
  }
];

module.exports = {
  activeCount: activeCount,
  count: count,
  focus: focus,
  mode: mode,
  todos: todos
};
