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
  let obj =  [{}];
  let markup = ``;
  for (var i = 0; i < data.users.length; i++) {
    markup += `
      <div class="robot">
        <img src="${data.users[i].avatar}" />
        <h2>${data.users[i].username}</h2>
    `;
    if (data.users[i].job) {
      markup += `
        <p>${data.users[i].job}</p>
        </div>
      `;
    } else {
      markup += `
        <p class="unemp">Available for hire</p>
        </div>
      `
    }
  }
  obj['markup'] = markup;

  res.render('index.mustache', obj);
})

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
