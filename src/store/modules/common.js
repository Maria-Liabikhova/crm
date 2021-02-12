import firebase from 'firebase'

export default {
  state: {
    error: null
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    },
    setClearError(state) {
      state.error = null
    }
  },
  actions: {
    activeError({ commit }, payload) {
      commit('setError', payload)
    },
    clearError({ commit }) {
      commit('setClearError')
    }
  },
  getters: {
    error(state) {
      return state.error
    }
  }
}
