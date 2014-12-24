var appNodeId, initialAppState, initialize, topViewFactory, viewImports;

initialize = require('../vendor/reactive-aspen').Initializer.initialize;

initialAppState = require('./initialAppState');

topViewFactory = require('./view/app');

viewImports = require('./controller/view-imports');

appNodeId = 'todoapp';

initialize(appNodeId, topViewFactory, initialAppState, viewImports);

require('./controller/test-channel');
