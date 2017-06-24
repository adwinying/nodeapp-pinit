import Vue from 'vue'

const updateUser = ({ commit }) => {
  Vue.http.get('/api/auth/profile')
    .then(({ data }) => {
      if (data.success) {
        commit('updateUser', data.user)
      } else {
        commit('resetUser')
      }
    })
}

const fetchPins = ({ commit }) => {
  Vue.http.get('/api/pin/all')
    .then(({ data }) => {
      if (data.success) {
        commit('updatePins', data.pins)
      } else {
        // TODO: flash msg
      }
    })
}

export default {
  updateUser,
  fetchPins,
}
