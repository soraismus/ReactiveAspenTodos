var express = require('express');
var fs      = require('fs');
var React   = require('react/addons');
var TodoApp = require('./lib/view/app');

var app       = express();
var anchor    = '$TODOAPP$';
var utf8      = { encoding: 'utf8' };
var appScript = fs.readFileSync('./build/output.js', utf8);
var template  = fs.readFileSync('./index.html', utf8);

// WET.
var defaultState = { editing: null, mode: 'all', todos: [] };

function renderReactToHtml(req, res) {
  console.log('renderReactToHtml');
  markup = React.renderToString(TodoApp(defaultState));
  console.log('Reach has been rendered.');
  res.send(template.replace(anchor, markup));
}

app.get('/', renderReactToHtml);
app.get('/index.html', renderReactToHtml);
app.get('/build/output.js', function (req, res) {
  console.log('About to send appScript');
  res.send(appScript);
});

var thisDir      = '.'
var bower        = '/bower_components/';
var todomvc      = bower + 'todomvc-common/';
var baseCssPath  = todomvc + 'base.css';
//var baseJsPath   = todomvc + 'base.js';
var directorPath = bower + 'director/build/director.js';

var baseCss  = fs.readFileSync(thisDir + baseCssPath);
//var baseJs   = fs.readFileSync(thisDir + baseJsPath);
var director = fs.readFileSync(thisDir + directorPath);

function serve(asset) {
  return function (req, res) {
    console.log('serving asset');
    res.send(asset);
  };
}

function setContentType(type) {
  return function (req, res, next) {
    res.setHeader('Content-Type', 'text/' + type);
    next();
  };
}

app.get(baseCssPath, setContentType('css'), serve(baseCss));
//app.get(baseJsPath, serve(baseJs));
app.get(directorPath, serve(director));

app.listen(4000);

console.log('Server running on port 4000.');
