var cacheAppData, compose, connect, editAppState, endEditing, extractNewTodo, filteringEnter, filteringEscape, mapping, nodes, onValue, plugIntoTerminus, removeCompletedTodos, removeTodo, restoreOrigTitle, saveCurrentTitle, storeTitle, toggleAllTodos, toggleTodo, transforms, _ref, _ref1;

compose = require('../utilities').compose;

_ref = require('../vendor/Controller'), connect = _ref.connect, onValue = _ref.onValue, plugIntoTerminus = _ref.plugIntoTerminus;

mapping = require('../vendor/Pando').transforms.mapping;

_ref1 = require('./transforms'), cacheAppData = _ref1.cacheAppData, editAppState = _ref1.editAppState, endEditing = _ref1.endEditing, extractNewTodo = _ref1.extractNewTodo, filteringEnter = _ref1.filteringEnter, filteringEscape = _ref1.filteringEscape, removeCompletedTodos = _ref1.removeCompletedTodos, removeTodo = _ref1.removeTodo, toggleAllTodos = _ref1.toggleAllTodos, toggleTodo = _ref1.toggleTodo, restoreOrigTitle = _ref1.restoreOrigTitle, saveCurrentTitle = _ref1.saveCurrentTitle, storeTitle = _ref1.storeTitle;

nodes = ['$clear-clicks', '$delete-clicks', '$new-todo-keydowns', '$toggle-all-clicks', '$toggle-clicks', '$edit-blurs', '$edit-keydowns', '$edit-keydowns'];

transforms = [mapping(removeCompletedTodos), mapping(removeTodo), compose([filteringEnter, mapping(extractNewTodo)]), mapping(toggleAllTodos), mapping(toggleTodo), mapping(endEditing(saveCurrentTitle)), compose([filteringEnter, mapping(endEditing(saveCurrentTitle))]), compose([filteringEscape, mapping(endEditing(restoreOrigTitle))])];

connect(nodes, 'cacher', function() {
  return transforms;
});

plugIntoTerminus('cacher', function() {
  return mapping(function(transform) {
    return function(__i) {
      return cacheAppData(transform(__i));
    };
  });
});

plugIntoTerminus('$todo-label-doubleclicks', function() {
  return mapping(editAppState);
});

onValue('todo-in-edit', function(capsule) {
  return storeTitle(capsule.event.target.value);
});
