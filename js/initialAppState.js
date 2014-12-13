var activeTodoCount, count, mode, todos;

todos = [
  {
    completed: false,
    editing: false,
    editText: '',
    title: 'think'
  }, {
    completed: true,
    editing: false,
    editText: '',
    title: 'ponder'
  }, {
    completed: false,
    editing: false,
    editText: '',
    title: 'reflect'
  }
];

activeTodoCount = 1;

count = 3;

mode = 'all';

module.exports = {
  activeTodoCount: activeTodoCount,
  count: count,
  mode: mode,
  todos: todos
};
