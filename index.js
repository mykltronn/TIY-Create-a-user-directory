"use strict";

const express = require('express');
const app = express();

var data = require('./data.js');

var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index.mustache', { users: data.users });
});

app.get('/:indexNum', function (req, res) {
  let i = parseInt(req.params.indexNum) - 1;
  res.render('user.mustache', data.users[i]);
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
