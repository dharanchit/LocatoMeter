const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const location = new Schema({
    city:{type:String,required:true},
    pincode:{type:Number,required:true},
    phoneNumber:{type:Number,required:true},
    email:{type:String,required:true,unique:true}
})

module.exports = mongoose.model('Location',location);