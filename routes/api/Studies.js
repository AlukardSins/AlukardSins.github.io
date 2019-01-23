const express = require('express')
const router = express.Router()

// Model
const Studies = require('../../models/Studies')

// @route   GET api/Exp
// @desc    Get All Exp
// @access  Public

router.get('/', (req, res) => {
    Exp.find()
        .sort({ started: -1 })
        .then(i => res.json(i))
})

// @route   POST api/Exp
// @desc    Post a new item
// @access  Public

router.post('/', (req, res) => {
    const newExp = new Exp({
        name: req.body.name,
        role: req.body.role,
        started: req.body.started,
        finished: req.body.finished,
        responsabilities: req.body.responsabilities,
    })

    newExp.save().then(i => res.json(i))
})

// @route   DELETE api/Exp/:id
// @desc    Delete an item
// @access  Public

router.delete('/:id', (req, res) => {
    Exp.findById(req.params.id)
        .then(i => i.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router