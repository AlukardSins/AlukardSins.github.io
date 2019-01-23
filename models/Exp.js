const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ExpSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    started: { type: Date, required: true },
    finished: { type: Date },
    responsabilities: [{ type: String }]
})

module.exports = Exp = mongoose.model('exp', ExpSchema)