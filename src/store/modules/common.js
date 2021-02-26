import firebase from 'firebase'

export default {
  state: {
    error: null,
    loading: false,
    successMessage: '',
    alertColor: ' '
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    },
    setLoading(state, payload) {
      state.loading = payload
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
    setLoading({ commit }, payload) {
      commit('setLoading', payload)
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
    loading(state) {
      return state.loading
    },
    successMessage(state) {
      return state.successMessage
    },
    alertColor(state) {
      return state.alertColor
    }
  }
}
