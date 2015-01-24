var cookieParser = require('cookie-parser');
var express      = require('express');
var fs           = require('fs');
var path         = require('path');
var React        = require('react/addons');
var TodoApp      = require('./lib/view/app');

var app      = express();
var anchor   = '$TODOAPP$';
var utf8     = { encoding: 'utf8' };
var template = fs.readFileSync('./index.html', utf8);

// WET.
var defaultState = { editing: null, mode: 'all', todos: [] };

function getAppState(req) {
  return JSON.parse(req.cookies.aspenTodoAppState) || defaultState;
}

function renderReactToHtml(req, res) {
  appState = getAppState(req);
  markup = React.renderToString(TodoApp(appState));
  res.send(template.replace(anchor, markup));
}

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.get('/', renderReactToHtml);
app.get('/index.html', renderReactToHtml);

app.listen(4000);

console.log('Server running on port 4000.');
