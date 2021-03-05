import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import common from './modules/common'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    common,
    auth
  }
})
