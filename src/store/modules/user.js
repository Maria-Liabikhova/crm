import firebase from 'firebase'

class User {
  constructor(id) {
    this.id = id
  }
}

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
    async registrationUser({ commit }, { email, password }) {
      commit('setClearError')
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        commit('createUser', new User(user.uid))
        commit('setSuccessMessage')
        commit('successColor')
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit('setClearError')
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        commit('createUser', user.uid)
        commit('setSuccessMessage')
        commit('successColor')
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}
