const mongoose = require('mongoose')
const Base = require('./base')

const TVShow = Base.discriminator('TVShow', new mongoose.Schema({
  season: { type: Number, require: true }
}))

module.exports = mongoose.model('TVShow')