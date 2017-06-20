"use strict";

const express = require('express');
const app = express();

var data = require('./data.js');

var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');




app.get('/', function (req, res) {
  res.send("now we're talking...");
})

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
