const updateUser = (state, user) => {
  state.auth.user = user
  state.auth.isLoggedIn = true
}

const resetUser = (state) => {
  state.auth.user = undefined
  state.auth.isLoggedIn = false
}

export default {
  updateUser,
  resetUser,
}
