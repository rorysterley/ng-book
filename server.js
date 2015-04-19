'use strict';

var express = require('express');
var mongoose = require('mongoose');
var angularRoutes = require('./routes/angular_routes');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/ngbook_dev');

// Routes =====================================================================
var angularRouter = express.Router();

angularRoutes(angularRouter);

app.use('/api/v1', angularRouter);

// Server init ================================================================
app.listen(port, function() {
  console.log('Server listening on port: ' + port);
});
