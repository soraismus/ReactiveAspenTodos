var $button, $link, AppFooter, Bridge, DOM, React, activeFilter, addons, allFilter, classSet, clearButton, completedFilter, countSpan, fields, footer, getFilterClassName, getFilterOption, li, noProps, pluralize, span, strong, ul, _ref, _ref1, _ref2;

_ref = require('../../vendor/reactive-aspen'), Bridge = _ref.Bridge, React = _ref.React;

pluralize = require('../utilities').pluralize;

addons = React.addons, DOM = React.DOM;

classSet = addons.classSet;

footer = DOM.footer, li = DOM.li, span = DOM.span, strong = DOM.strong, ul = DOM.ul;

_ref1 = Bridge.adapters, $button = _ref1.$button, $link = _ref1.$link;

noProps = null;

AppFooter = function(props) {
  var activeCount, count, filterOption, mode;
  activeCount = props.activeCount, count = props.count, mode = props.mode;
  filterOption = getFilterOption(mode);
  return footer({
    id: 'footer'
  }, countSpan(activeCount), ul({
    id: 'filters'
  }, allFilter(mode), activeFilter(mode), completedFilter(mode)), clearButton(count - activeCount));
};

clearButton = function(completedCount) {
  var label;
  if (!(completedCount > 0)) {
    return null;
  }
  label = "Clear completed (" + completedCount + ")";
  return $button('ClearButton')({
    id: 'clear-completed'
  }, label);
};

countSpan = function(count) {
  var activeTodoWord;
  activeTodoWord = pluralize(count, 'item');
  return span({
    id: 'todo-count'
  }, strong(noProps, count), " " + activeTodoWord + " left");
};

getFilterClassName = function(currentMode, filterMode) {
  return classSet({
    selected: currentMode === filterMode
  });
};

getFilterOption = function(_arg) {
  var busLabel, href, linkLabel, mode;
  busLabel = _arg[0], href = _arg[1], linkLabel = _arg[2], mode = _arg[3];
  return function(currentMode) {
    var linkProps;
    linkProps = {
      href: href,
      className: getFilterClassName(mode, currentMode)
    };
    return li(noProps, $link(busLabel)(linkProps, linkLabel));
  };
};

fields = [['ActiveTodos', 'active', 'Active ', 'active'], ['AllTodos', '', 'All ', 'all'], ['CompletedTodos', 'completed', 'Completed', 'completed']];

_ref2 = fields.map(getFilterOption), activeFilter = _ref2[0], allFilter = _ref2[1], completedFilter = _ref2[2];

module.exports = AppFooter;
