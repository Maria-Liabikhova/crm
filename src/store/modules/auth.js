import firebase from 'firebase'

class UserAuth {
  constructor(id) {
    this.id = id
  }
}

export default {
  state: {
    userAuth: null
  },
  mutations: {
    identifyUser(state, payload) {
      state.userAuth = payload
    }
  },
  actions: {
    async registrationUser({ commit }, { email, password }) {
      commit('setClearError')
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        commit('identifyUser', new UserAuth(user.user.uid))
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
        commit('identifyUser', new UserAuth(user.user.uid))
        commit('setSuccessMessage')
        commit('successColor')
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    letStayLoggedIn({ commit }, payload) {
      commit('identifyUser', new UserAuth(payload.uid))
    },
    logoutUser({ commit }) {
      firebase.auth().signOut()
      commit('identifyUser', null)
    }
  },
  getters: {
    userAuth(state) {
      return state.userAuth
    },
    userLoggedIn(state) {
      return state.userAuth !== null
    }
  }
}
