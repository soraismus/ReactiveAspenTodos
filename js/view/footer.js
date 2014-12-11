var $button, $link, AppFooter, Bridge, DOM, React, activeFilter, addons, allFilter, classSet, clearButton, completedFilter, countSpan, fields, footer, getFilterClassName, getFilterOption, li, pluralize, span, strong, ul, _ref, _ref1, _ref2;

_ref = require('../../vendor/reactive-aspen'), Bridge = _ref.Bridge, React = _ref.React;

pluralize = require('../utilities').pluralize;

addons = React.addons, DOM = React.DOM;

classSet = addons.classSet;

footer = DOM.footer, li = DOM.li, span = DOM.span, strong = DOM.strong, ul = DOM.ul;

_ref1 = Bridge.adapters, $button = _ref1.$button, $link = _ref1.$link;

AppFooter = function(props) {
  var active, all, completed, count, filterOption, mode;
  active = props.active, all = props.all, completed = props.completed, count = props.count, mode = props.mode;
  filterOption = getFilterOption(mode);
  return footer({
    id: 'footer'
  }, countSpan(count), ul({
    id: 'filters'
  }, allFilter(mode, all), activeFilter(mode, active), completedFilter(mode, completed)), clearButton(count));
};

clearButton = function(count) {
  var label;
  if (!(count > 0)) {
    return null;
  }
  label = "Clear completed " + count;
  return $button('ClearButton')({
    id: 'clear-completed'
  }, label);
};

countSpan = function(count) {
  var activeTodoWord;
  activeTodoWord = pluralize(count, 'item');
  return span({
    id: 'todo-count'
  }, strong(count), "" + activeTodoWord + " left");
};

getFilterClassName = function(nowShowing, filterType) {
  return classSet({
    selected: nowShowing === filterType
  });
};

getFilterOption = function(_arg) {
  var busLabel, href, linkLabel;
  busLabel = _arg[0], href = _arg[1], linkLabel = _arg[2];
  return function(mode, filter) {
    var linkProps;
    linkProps = {
      href: href,
      className: getFilterClassName(mode, filter)
    };
    return li($link(busLabel)(linkProps, linkLabel));
  };
};

fields = [['ActiveTodos', '/active', 'Active '], ['AllTodos', '/', 'All '], ['CompletedTodos', '/completed', 'Completed']];

_ref2 = fields.map(getFilterOption), activeFilter = _ref2[0], allFilter = _ref2[1], completedFilter = _ref2[2];

module.exports = AppFooter;