var Adapter, Controller, React, appNodeId, connectPortsToBuses, initialAppState, initialize, linkTogetherMVC, push, renderComponent, topViewFactory, viewImports, _ref;

_ref = require('../vendor/reactive-aspen'), Adapter = _ref.Adapter, Controller = _ref.Controller, React = _ref.React;

initialAppState = require('./initialAppState');

topViewFactory = require('./view/app');

viewImports = require('./controller/view-imports');

linkTogetherMVC = Controller.linkTogetherMVC, push = Controller.push;

renderComponent = React.renderComponent;

connectPortsToBuses = Adapter.connectPortsToBuses;

appNodeId = 'todoapp';

initialize = function(appNodeId, topViewFactory, initialAppState, viewImports) {
  var topReactDescriptor;
  push('top-view-factory')(topViewFactory);
  topReactDescriptor = linkTogetherMVC(topViewFactory, initialAppState);
  renderComponent(topReactDescriptor, document.getElementById(appNodeId));
  return connectPortsToBuses(viewImports);
};

initialize(appNodeId, topViewFactory, initialAppState, viewImports);

require('./controller/test-channel');