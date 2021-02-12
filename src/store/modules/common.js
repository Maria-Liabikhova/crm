import firebase from 'firebase'

export default {
  state: {
    error: null
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    activeError({ commit }, payload) {
      commit('setError', payload)
    }
  },
  getters: {
    error(state) {
      return state.error
    }
  }
}
