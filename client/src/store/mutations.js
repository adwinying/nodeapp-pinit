const showMsg = (state, { message, type }) => {
  state.flash.show = true
  state.flash.message = message
  state.flash.type = type
}

const hideMsg = (state) => {
  state.flash.show = false
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

export default {
  showMsg,
  hideMsg,
  updateUser,
  resetUser,
  updatePins,
}
