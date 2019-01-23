const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PortafolioSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    URL: { type: String }
})

module.exports = Portafolio = mongoose.model('portafolio', PortafolioSchema)