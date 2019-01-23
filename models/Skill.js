const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const SkillSchema = new Schema({
    name: { type: String, required: true },
    level: { type: String, required: true },
    certificate: { type: String }
})

module.exports = Skill = mongoose.model('skill', SkillSchema)