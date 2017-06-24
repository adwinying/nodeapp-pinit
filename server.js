const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const mongodb = require('./config/mongoose')
const passport = require('./config/passport')

const authRoutes = require('./routes/authRoutes')

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

app.get('/', (req, res) => {
  res.json({
    api: 'online',
  })
})

app.listen(port, () => {
  console.log('Server listen on port', port)
})
