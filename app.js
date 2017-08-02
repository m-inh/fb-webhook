'use strict';

const express = require('express');
const bodyParser = require('body-parser')

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.end('ok men');
});

app.post('/', function(req, res) {
  console.log('req.body', JSON.stringify(req.body));

  res.end(JSON.stringify(req.body));
});

app.get('/webhook', function(req, res) {
  res.end('ok men');
});

app.post('/webhook', function(req, res) {
  console.log('req.body', JSON.stringify(req.body));

  res.end(JSON.stringify(req.body));
});

app.listen(3000, function(err) {
  if (err) console.err(err);

  console.log('server is listening on 3000');
})
