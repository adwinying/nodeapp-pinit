const passport = require('passport');
const session = require('express-session');
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/userModel');

const options = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: '/api/auth/callback',
};

// Passport config
module.exports.config = (app) => {
  app.use(session({
    secret: process.env.PASSPORT_SECRET,
    resave: true,
    saveUninitialized: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    User.findByUserId(user.userId, (err, result) => {
      done(err, result);
    });
  });

  passport.use(new TwitterStrategy(options,
    (token, tokenSecret, profile, done) => {
      console.log('Auth success');
      User.findOrCreate(profile, (err, user) => {
        done(err, user);
      });
    }));
};

// Passport check logged in mw
module.exports.loggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({
      success: false,
      message: 'Not logged in',
    });
  }
};
