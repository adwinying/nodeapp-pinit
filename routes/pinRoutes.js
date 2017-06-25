const express = require('express')

const User = require('../models/userModel')
const Pin = require('../models/pinModel')

const loggedIn = require('../config/passport').loggedIn

const pinRouter = express.Router()

function sendErr(res, message) {
  res.json({
    success: false,
    message,
  })
}

pinRouter.get('/all', (req, res) => {
  Pin.fetchAll((err, pins) => {
    if (err) {
      sendErr(res, err)
    } else {
      res.json({
        success: true,
        pins,
      })
    }
  })
})

pinRouter.get('/user/:userId', (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      sendErr(res, err)
    } else if (!user) {
      sendErr(res, 'User not found!')
    } else {
      Pin.fetchUserPins(req.params.userId, (pinErr, pins) => {
        if (pinErr) {
          sendErr(res, pinErr)
        } else {
          res.json({
            success: true,
            pins,
          })
        }
      })
    }
  })
})

pinRouter.post('/new', loggedIn, (req, res) => {
  const newPin = {
    title: req.body.title,
    owner: req.user ? req.user._id : '594e1e6e2ade2b051f7db3fa',
    imageURL: req.body.imageURL,
  }

  Pin.create(newPin, (err, pin) => {
    if (err) {
      sendErr(res, err)
    } else {
      pin.populate({ path: 'owner' }, (popErr, pop) => {
        if (popErr) {
          sendErr(res, popErr)
        } else {
          res.json({
            success: true,
            pin: pop,
          })
        }
      })
    }
  })
})

pinRouter.put('/update', loggedIn, (req, res) => {
  const targetPin = {
    _id: req.body._id,
    title: req.body.title,
    owner: req.body.owner,
    imageURL: req.body.imageURL,
    likedBy: req.body.likedBy,
  }

  Pin.update(targetPin, (err, pin) => {
    if (err) {
      sendErr(res, err)
    } else {
      pin.populate({ path: 'owner' }, (popErr, pop) => {
        if (popErr) {
          sendErr(res, popErr)
        } else {
          res.json({
            success: true,
            pin: pop,
          })
        }
      })
    }
  })
})

pinRouter.delete('/:pinId', loggedIn, (req, res) => {
  Pin.delete(req.params.pinId, (err) => {
    if (err) {
      sendErr(res, err)
    } else {
      res.json({
        success: true,
        message: 'Pin successfully deleted.',
      })
    }
  })
})

module.exports = pinRouter
