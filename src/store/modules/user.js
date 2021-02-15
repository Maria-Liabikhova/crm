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
    identifyUser(state, payload) {
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
        commit('identifyUser', new User(user.uid))
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
        commit('identifyUser', user.uid)
        commit('setSuccessMessage')
        commit('successColor')
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    letStayLoggedIn({ commit }, payload) {
      commit('identifyUser', new User(payload.uid))
    },
    logoutUser({ commit }) {
      firebase.auth().signOut()
      commit('identifyUser', null)
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    userLoggedIn(state) {
      return state.user !== null
    }
  }
}
