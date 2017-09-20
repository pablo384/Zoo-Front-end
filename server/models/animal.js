'use strict';
const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const AnimalSchema= Schema({
    name:String,
    description:String,
    year:Number,
    image:String,
    user:{ type: Schema.ObjectId, ref:'User'}
});

module.exports=mongoose.model('Animal', AnimalSchema);