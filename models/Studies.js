const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const StudiesSchema = new Schema({
    title: { type: String, required: true },
    institution: { type: String, required: true },
    started: { type: Date, required: true },
    finished: { type: Date }
})

module.exports = Studies = mongoose.model('studies', StudiesSchema)