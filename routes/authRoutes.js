const express = require('express')
const passport = require('passport')
const loggedIn = require('../config/passport').loggedIn

const authRouter = express.Router()

authRouter.get('/login', passport.authenticate('twitter'))

authRouter.get(
  '/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    if (process.env.ENV === 'dev') {
      res.redirect('http://localhost:3000/')
    } else {
      res.redirect('/')
    }
  })

authRouter.get('/profile', loggedIn, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  })
})

module.exports = authRouter
