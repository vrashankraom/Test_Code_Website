//jshint esversion:6
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailsPage =new Schema({
  firstname:{type:String,required:true},
  lastname:{type:String,required:false},
  email:{type:String,required:true},
  phonenumber:{type:Number,required:true},
  query:{type:String,required:true},
},{
  timestamps: true,
});

const Details =mongoose.model("DetailsPage",detailsPage);
module.exports = Details;
