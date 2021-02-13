import firebase from 'firebase'

export default {
  state: {
    error: null,
    successMessage: ''
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    },
    setClearError(state) {
      state.error = null
    },
    setSuccessMessage(state) {
      state.successMessage = 'Success!'
    }
  },
  actions: {
    activeError({ commit }, payload) {
      commit('setError', payload)
    },
    clearError({ commit }) {
      commit('setClearError')
    },
    isSuccessMessage({ commit }) {
      commit('setSuccessMessage')
    }
  },
  getters: {
    error(state) {
      return state.error
    },
    successMessage(state) {
      return state.successMessage
    }
  }
}
