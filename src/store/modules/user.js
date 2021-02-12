import firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    createUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    registrationUser({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('createUser', user)
        })
        .catch(error => {
          commit('setError', error.message)
          console.log('Ошибка регистрации:', error.message)
        })
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}
