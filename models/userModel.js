const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  displayName: String,
  username: String,
});

const User = mongoose.model('User', userModel);

User.model = userModel;

User.findOrCreate = (profile, callback) => {
  User.findOne({ userId: profile.id }, (err, user) => {
    if (err) { callback(err, null); }

    if (user) {
      console.log('User found in DB');
      callback(null, user);
    } else {
      console.log('User not found. Creating new db entry');

      const newUser = new User({
        userId: profile.id,
        displayName: profile.displayName,
        username: profile.username,
      });

      newUser.save(callback);
    }
  });
};

User.findByUserId = (userId, callback) => {
  User.findOne({ userId }, (err, user) => {
    if (err) { callback(err, null); }

    if (user) {
      callback(null, user);
    }
  });
};

module.exports = User;
