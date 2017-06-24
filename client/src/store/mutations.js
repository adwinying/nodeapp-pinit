const showMsg = (state, { message, type }) => {
  state.flash.show = true
  state.flash.message = message
  state.flash.type = type
}

const hideMsg = (state) => {
  state.flash.show = false
}

const toggleOverlay = (state) => {
  state.overlay.active = !state.overlay.active
}

const updateUser = (state, user) => {
  state.auth.user = user
  state.auth.isLoggedIn = true
}

const resetUser = (state) => {
  state.auth.user = undefined
  state.auth.isLoggedIn = false
}

const updatePins = (state, pins) => {
  state.pins.list = pins
}

const addPin = (state, pin) => {
  state.pins.list.unshift(pin)
}

const deletePin = (state, pinId) => {
  state.pins.list = state.pins.list.filter(pin =>
    pin._id !== pinId)
}

const updateTargetUser = (state, userId) => {
  state.pins.targetUser = userId
}

export default {
  showMsg,
  hideMsg,
  toggleOverlay,
  updateUser,
  resetUser,
  updatePins,
  addPin,
  deletePin,
  updateTargetUser,
}
