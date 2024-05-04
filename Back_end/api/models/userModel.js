const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    Prefix: String,
    fname: String,
    lname: String,
    productname:Array,
    position: String,
    email:String,
    username:String,
    password:String,
    employee:String
     
  })

const UserModel = mongoose.model('user', userSchema, 'user')

module.exports = UserModel