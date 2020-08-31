const mongoose = require('mongoose')
const Base = require('./base')

const Movie = Base.discriminator('Movie', new mongoose.Schema({
  director: { type: String, required: true }
}))

module.exports = mongoose.model('Movie')
