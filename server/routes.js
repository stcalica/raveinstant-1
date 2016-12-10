const router = require('express').Router();
const path = require('path');

// This code can be modularized later
const sendHome = function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
};

module.exports = {
  sendHome: sendHome
};

module.exports = router;