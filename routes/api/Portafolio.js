const express = require('express')
const router = express.Router()

// Model
const Portafolio = require('../../models/Portafolio')

// @route   GET api/Portafolio
// @desc    Get All Portafolio
// @access  Public

router.get('/', (req, res) => {
    Portafolio.find()
        .sort({ started: -1 })
        .then(i => res.json(i))
})

// @route   POST api/Portafolio
// @desc    Post a new item
// @access  Public

router.post('/', (req, res) => {
    const newPortafolio = new Portafolio({
        name: req.body.name,
        role: req.body.role,
        URL: req.body.URL
    })

    newPortafolio.save().then(i => res.json(i))
})

// @route   DELETE api/Portafolio/:id
// @desc    Delete an item
// @access  Public

router.delete('/:id', (req, res) => {
    Portafolio.findById(req.params.id)
        .then(i => i.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router