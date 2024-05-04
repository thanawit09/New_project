const mongoose = require('mongoose')
const Schema = mongoose.Schema

const graph_master = new Schema({
    part_no:String,
    type:Array
   

  })
const graphMaster = mongoose.model('part_master', graph_master, 'part_master')

module.exports = graphMaster