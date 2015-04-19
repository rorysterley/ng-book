'use strict';

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  text: {type: String, required: true}
});

module.exports = mongoose.model('Todo', todoSchema);
