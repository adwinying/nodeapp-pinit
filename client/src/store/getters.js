const allPins = state => state.pins.list

const activeUserPins = state => state.pins.list.filter(pin =>
  state.auth.user && pin.owner._id === state.auth.user._id)

const isLoggedIn = state => state.auth.isLoggedIn

const profile = state => state.auth.user

const flashMessage = state => state.flash

export default {
  allPins,
  activeUserPins,
  isLoggedIn,
  profile,
  flashMessage,
}
