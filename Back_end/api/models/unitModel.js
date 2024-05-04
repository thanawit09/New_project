const mongoose = require('mongoose')
const Schema = mongoose.Schema

const unit_master = new Schema({
    unit:String

  })
const unitMaster = mongoose.model('unit', unit_master, 'unit')

module.exports = unitMaster