
var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

// handlebars setup and configuration
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));


app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/help', function (req, res) {
  res.render('help');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});

module.exports = server;
