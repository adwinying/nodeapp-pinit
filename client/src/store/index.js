import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      isLoggedIn: false,
      user: undefined,
    },
    flash: {
      show: false,
      message: 'Loading...',
      type: 'success',
    },
    pins: {
      list: [],
      targetUser: undefined,
    },
    overlay: {
      active: false,
    },
  },
  actions,
  mutations,
  getters,
})
