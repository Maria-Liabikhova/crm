import firebase from 'firebase'

export default {
  state: {
    error: null,
    successMessage: '',
    alertColor: ' '
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
    },
    successColor(state) {
      state.alertColor = 'green lighten-1'
    },
    errorColor(state) {
      state.alertColor = 'red darken-1'
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
    },
    isSuccessColor({ commit }) {
      commit('successColor')
    },
    isErrorColor({ commit }) {
      commit('errorColor')
    }
  },
  getters: {
    error(state) {
      return state.error
    },
    successMessage(state) {
      return state.successMessage
    },
    alertColor(state) {
      return state.alertColor
    }
  }
}
