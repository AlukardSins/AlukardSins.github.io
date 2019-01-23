const express = require('express')
const router = express.Router()

// Model
const Skill = require('../../models/Skill')

// @route   GET api/Skill
// @desc    Get All Skill
// @access  Public

router.get('/', (req, res) => {
    Skill.find()
        .sort({ started: -1 })
        .then(i => res.json(i))
})

// @route   POST api/Skill
// @desc    Post a new item
// @access  Public

router.post('/', (req, res) => {
    const newSkill = new Skill({
        name: req.body.name,
        level: req.body.level,
        certificate: req.body.certificate
    })

    newSkill.save().then(i => res.json(i))
})

// @route   DELETE api/Skill/:id
// @desc    Delete an item
// @access  Public

router.delete('/:id', (req, res) => {
    Skill.findById(req.params.id)
        .then(i => i.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router