const mongoose = require('mongoose')
const Schema = mongoose.Schema

const products = new Schema({
   product_name:String,
    line_name:Array,
  })
const product = mongoose.model('product', products, 'product')

module.exports = product