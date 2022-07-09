const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userchema = new Schema({
   name:String,
   surmame:String,
   email:String,
   username:{type:String,required:true,unique:true},
   password:{type:String,required:true}
},{timestamps:true})

const User = mongoose.model('User',userchema)
module.exports = User;