var Controller, React, appNodeId, initialAppState, initialize, linkTogetherMVC, push, renderComponent, topViewFactory, _ref;

_ref = require('../vendor/reactive-aspen'), Controller = _ref.Controller, React = _ref.React;

initialAppState = require('./initialAppState');

topViewFactory = require('./view/app');

linkTogetherMVC = Controller.linkTogetherMVC, push = Controller.push;

renderComponent = React.renderComponent;

appNodeId = 'todoapp';

initialize = function(appNodeId, topViewFactory, initialAppState) {
  var topReactDescriptor;
  push('top-view-factory')(topViewFactory);
  topReactDescriptor = linkTogetherMVC(topViewFactory, initialAppState);
  return renderComponent(topReactDescriptor, document.getElementById(appNodeId));
};

initialize(appNodeId, topViewFactory, initialAppState);
