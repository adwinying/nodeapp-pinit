const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const mongodb = require('./config/mongoose')

const app = express()
const port = process.env.PORT || 8000

// Connect to DB
mongodb.config()

// Body Parser mw
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    api: 'online',
  })
})

app.listen(port, () => {
  console.log('Server listen on port', port)
})
