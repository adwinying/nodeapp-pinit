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

export default {
  updateUser,
}
