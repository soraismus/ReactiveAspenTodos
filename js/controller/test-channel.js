var getProperty;

getProperty = require('../../vendor/reactive-aspen').Controller.getProperty;

getProperty('$toggle-all-clicks').subscribe(function(event) {
  return console.log('$toggle-all-clicks', event);
});


/*
update-mode = \new-mode ->
  mapping (-> update-view new-mode)

connect ['$home-clicks', '$signin-clicks', '$signup-clicks'] 'terminus' (->
  fmap update-mode ['home', 'signin', 'signup'])
 */
