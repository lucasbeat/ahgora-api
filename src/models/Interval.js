const Mongoose = require('mongoose');
const Schema  = Mongoose.Schema;

const Interval = new Schema({
  date: { type: Date, default: Date.now },
  name: { type: String },
  motivo: { type: Array },
});

module.exports = Mongoose.model('Dnas', Interval);