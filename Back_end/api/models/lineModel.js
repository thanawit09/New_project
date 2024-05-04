const mongoose = require('mongoose')
const Schema = mongoose.Schema

const line_master = new Schema({
    line_name:String,
    line_tool:Array,
    limit:Number,
    unit:String,
    id:Number,
    all_tool_life:Number,
 

  })
const lineMaster = mongoose.model('line_master', line_master, 'line_master')

module.exports = lineMaster