const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');

app.use(express.static(__dirname + '/../client'));
app.port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for routes
// https://expressjs.com/en/guide/routing.html
app.use('/', router);

// app.get('*', (req, res) => {
//   console.log('Sending index file');
//   res.sendFile(path.resolve(__dirname + '/../client/index.html'));
// });

app.listen(app.port, () => {
  console.log('Listening on port:', app.port);
});