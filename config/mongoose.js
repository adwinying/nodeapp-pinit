const mongoose = require('mongoose');
const bluebird = require('bluebird');

module.exports.config = () => {
  mongoose.Promise = bluebird;
  mongoose.connect(process.env.DB_URI);
  mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB', process.env.DB_URI);
  });
  mongoose.connection.on('error', (err) => {
    console.log('Error connecting to DB', err);
  });
};
