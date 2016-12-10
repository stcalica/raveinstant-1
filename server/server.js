const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');

app.use(express.static(__dirname + '/../client'));
app.port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

// ====================
// Come back to this code when you're ready to modularize
// ====================
// middleware for routes
// https://expressjs.com/en/guide/routing.html
// app.use('/', router);

app.listen(app.port, () => {
  console.log('Listening on port:', app.port);
});