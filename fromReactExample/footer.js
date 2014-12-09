var app = app || {};

app.footer = function (config) {
  'use strict';
  return TodoFooter({
    count            : config.activeTodoCount,
    completedCount   : config.completedCount,
    nowShowing       : config.nowShowing,
    onClearCompleted : function () {}
  });
};
