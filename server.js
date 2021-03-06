const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const mongodb = require('./config/mongoose')
const passport = require('./config/passport')

const authRoutes = require('./routes/authRoutes')
const pinRoutes = require('./routes/pinRoutes')

const app = express()
const port = process.env.PORT || 8000

// Connect to DB
mongodb.config()

// Body Parser mw
app.use(bodyParser.json())

// Passport mw
passport.config(app)

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/pin', pinRoutes)

// Serve static files
app.use(express.static(path.join(__dirname, '/public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, () => {
  console.log('Server listen on port', port)
})
