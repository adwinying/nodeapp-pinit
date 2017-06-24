const allPins = state => state.pins.list

const isLoggedIn = state => state.auth.isLoggedIn

const profile = state => state.auth.user

export default {
  allPins,
  isLoggedIn,
  profile,
}
