import Vue from 'vue'

const flashMsg = ({ commit }, { message, type, duration }) => {
  commit('showMsg', { message, type })

  if (duration) {
    setTimeout(() => {
      commit('hideMsg')
    }, duration)
  }
}

const flashLoading = ({ commit }) => {
  flashMsg({ commit }, {
    message: 'Loading...',
    type: 'info',
    duration: 0,
  })
}

const flashErr = ({ commit }) => {
  flashMsg({ commit }, {
    message: 'Error has occured, please try again later',
    type: 'danger',
    duration: 0,
  })
}

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
  flashLoading({ commit })

  Vue.http.get('/api/pin/all')
    .then(({ data }) => {
      commit('hideMsg')
      if (data.success) {
        commit('updatePins', data.pins)
      } else {
        flashErr({ commit })
        console.error(data.message)
      }
    })
    .catch((err) => {
      flashErr({ commit })
      console.error(err)
    })
}

export default {
  flashMsg,
  flashLoading,
  flashErr,
  updateUser,
  fetchPins,
}
