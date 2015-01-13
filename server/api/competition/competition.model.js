'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompetitionSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Competition', CompetitionSchema);