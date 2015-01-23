var $router_hyphen_events, NAMESPACE, connect, getEventStream, mapping, push, resetMode, router, setModeTo, updateMode, _ref;

_ref = require('../vendor/Controller'), connect = _ref.connect, getEventStream = _ref.getEventStream, push = _ref.push;

mapping = require('../vendor/Pando').transforms.mapping;

NAMESPACE = require('../namespace');

resetMode = require('../model/appState').resetMode;

setModeTo = function(mode) {
  return function() {
    return push($router_hyphen_events, mode);
  };
};

updateMode = function(newMode) {
  return function(appState) {
    return resetMode(appState, newMode);
  };
};

$router_hyphen_events = getEventStream('$router-events');

$router_hyphen_events.subscribe(function(capsule) {
  return capsule.event.target.blur();
});

connect($router_hyphen_events, 'cacher', function() {
  return mapping(updateMode);
});

router = Router({
  '/': setModeTo('all'),
  '/active': setModeTo('active'),
  '/completed': setModeTo('completed')
});

router.init('/');
