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
  updateUser,
  resetUser,
  updatePins,
}
