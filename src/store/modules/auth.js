import firebase from 'firebase'

class UserAuth {
  constructor(id, email) {
    this.id = id
    this.email = email
  }
}

export default {
  state: {
    userAuth: null,
    userEmail: ''
  },
  mutations: {
    identifyUser(state, payload) {
      state.userAuth = payload
    },
    setUserEmail(state, payload) {
      state.userEmail = payload
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
      commit('identifyUser', new UserAuth(payload.uid, payload.email))
      commit('setUserEmail', payload.email)
    },
    logoutUser({ commit }) {
      firebase.auth().signOut()
      commit('identifyUser', null)
    },
    async deletAuth({ commit }) {
      try {
        const user = await firebase.auth().currentUser
        user.delete()
      } catch (error) {
        throw error
      }
    }
  },
  getters: {
    userAuth(state) {
      return state.userAuth
    },
    userLoggedIn(state) {
      return state.userAuth !== null
    },
    userEmail(state) {
      return state.userEmail
    }
  }
}
