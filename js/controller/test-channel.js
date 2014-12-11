var getDispatcher, log, logSubscribe, reactIntake;

getDispatcher = require('../../vendor/reactive-aspen').Controller.getDispatcher;

log = function(label) {
  return function(event) {
    return console.log(label, event);
  };
};

reactIntake = getDispatcher('reactIntake');

logSubscribe = function(label) {
  return getDispatcher(label).subscribe(log(label));
};

['$toggle-all-clicks', 'new-todo', '$toggle-clicks', '$destroy-clicks', '$clear-clicks', '$active-todo-clicks', '$all-todo-clicks', '$completed-todos-clicks', 'todo-in-edit', '$todo-label-doubleclicks'].forEach(logSubscribe);

module.exports = null;
