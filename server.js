const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Bring api routes
const exp = require('./routes/api/Exp')
const portafolio = require('./routes/api/Portafolio')
const skill = require('./routes/api/Skill')
const studies = require('./routes/api/Studies')

// Express starter
const app = express()

// Body Parser Middleware
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// DB Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log("Connected..."))
    .catch(err => console.log(err))

// Use api routes
app.use('/api/exp', exp)
app.use('/api/portafolio', portafolio)
app.use('/api/skill', skill)
app.use('/api/studies', studies)

// Port Definition
const port = process.env.PORT || 5000

// Conected checking
app.listen(port, () => console.log(`Server on ${port}`))