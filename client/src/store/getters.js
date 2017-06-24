const allPins = state => state.pins.list

const targetUserPins = state => state.pins.list.filter(pin =>
  pin.owner._id === state.pins.targetUser)

const overlayActive = state => state.overlay.active

const isLoggedIn = state => state.auth.isLoggedIn

const profile = state => state.auth.user

const flashMessage = state => state.flash

export default {
  allPins,
  targetUserPins,
  overlayActive,
  isLoggedIn,
  profile,
  flashMessage,
}
