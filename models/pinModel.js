const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pinModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  imageURL: {
    type: String,
    required: true,
  },
  likedBy: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    default: [],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated',
  },
})

const Pin = mongoose.model('Pin', pinModel)

Pin.create = (pin, callback) => {
  const newPin = new Pin(pin)
  newPin.save(callback)
}

Pin.update = (pin, callback) => {
  Pin.findOneAndUpdate(
    { _id: pin._id },
    pin,
    { new: true },
    callback)
}

Pin.delete = (pinId, callback) => {
  Pin.deleteOne({ _id: pinId }, callback)
}

Pin.fetchAll = (callback) => {
  Pin.find({})
    .populate({ path: 'owner' })
    .sort('-created')
    .exec(callback)
}

Pin.fetchUserPins = (userId, callback) => {
  Pin.find({ owner: userId })
    .populate({ path: 'owner' })
    .sort('-created')
    .exec(callback)
}

module.exports = Pin
