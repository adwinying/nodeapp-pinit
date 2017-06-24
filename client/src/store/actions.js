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

const addPin = ({ commit }, newPin) => {
  flashLoading({ commit })

  Vue.http.post('/api/pin/new', newPin)
    .then(({ data }) => {
      if (data.success) {
        commit('addPin', data.pin)
        commit('toggleOverlay')
        flashMsg({ commit }, {
          message: 'Pin successfully added.',
          type: 'success',
          duration: 3000,
        })
      } else {
        flashMsg({ commit }, {
          message: data.message,
          type: 'danger',
          duration: 0,
        })
      }
    })
    .catch((err) => {
      flashErr({ commit })
      console.error(err)
    })
}

const deletePin = ({ commit }, pinId) => {
  flashLoading({ commit })

  Vue.http.delete(`/api/pin/${pinId}`)
    .then(({ data }) => {
      if (data.success) {
        commit('deletePin', pinId)
        flashMsg({ commit }, {
          message: 'Pin successfully deleted.',
          type: 'success',
          duration: 3000,
        })
      } else {
        flashMsg({ commit }, {
          message: data.message,
          type: 'danger',
          duration: 0,
        })
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
  addPin,
  deletePin,
}
