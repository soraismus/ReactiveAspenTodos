var activeCount, count, mode, todos;

todos = [
  {
    completed: false,
    editing: false,
    editText: null,
    title: 'think'
  }, {
    completed: true,
    editing: false,
    editText: null,
    title: 'ponder'
  }, {
    completed: false,
    editing: false,
    editText: null,
    title: 'reflect'
  }
];

activeCount = 2;

count = 3;

mode = 'all';

module.exports = {
  activeCount: activeCount,
  count: count,
  mode: mode,
  todos: todos
};
