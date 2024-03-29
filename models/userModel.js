const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Name required']
    },
    email:{
        type:String,
        required:[true,'Unique email required'],
        unique:ture
    },
    password:{
        type:String,
        required:[true,'Password required'],
    }
},{timestamps:true})

const userModel = model('users', userSchema);
module.exports = userModel;