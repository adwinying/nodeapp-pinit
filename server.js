const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.PORT || 8000


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
