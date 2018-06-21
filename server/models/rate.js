const mongoose = require("mongoose");

console.log('SERVER > MODELS > rate.js');

var RateSchema = new mongoose.Schema({
  rating: {type: Number},
  comment: {type: String, default: ""},
 },
  { timestamps: true }
);

mongoose.model('Rate', RateSchema); //we are setting this schema in our models as Task

module.exports = RateSchema;