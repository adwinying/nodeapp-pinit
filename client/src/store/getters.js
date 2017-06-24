const allPins = state => state.pins.list

const isLoggedIn = state => state.auth.isLoggedIn

const profile = state => state.auth.user

const flashMessage = state => state.flash

export default {
  allPins,
  isLoggedIn,
  profile,
  flashMessage,
}
