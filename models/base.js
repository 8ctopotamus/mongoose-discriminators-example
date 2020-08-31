const mongoose = require('mongoose')

const baseOptions = {
  discriminatorKey: 'itemType',
  collection: 'items',
}

const Base = mongoose.model('Base', new mongoose.Schema({
  title: { type: String, required: true },
  date_added: { type: Date, required: true },
  redo: { type: Boolean, default: false },
}, baseOptions))

module.exports = mongoose.model('Base')