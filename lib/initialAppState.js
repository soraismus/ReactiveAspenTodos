var activeCount, cachedState, count, defaultState, empty_question_, focus, initialAppState, mode, store, todos;

store = require('./utilities').store;

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

empty_question_ = function(array) {
  return array.length === 0;
};

cachedState = store('reactive-aspen-todos');

defaultState = {
  activeCount: activeCount,
  count: count,
  focus: focus,
  mode: mode,
  todos: todos
};

initialAppState = empty_question_(cachedState) ? defaultState : cachedState;

module.exports = initialAppState;
