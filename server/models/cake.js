const mongoose = require("mongoose");
var RateSchema = require('./rate.js');
console.log('SERVER > MODELS > cake.js');


var CakeSchema = new mongoose.Schema({
  name: {type: String},
  imgurl: {type: String, default: ""},
  rating: [RateSchema]
 },
  { timestamps: true }
);

mongoose.model('Cake', CakeSchema); //we are setting this schema in our models as Task