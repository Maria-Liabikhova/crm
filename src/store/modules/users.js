import firebase from 'firebase'
import store from '@/store'
class User {
  constructor(name, secondName, nickname, age, aid, email, gender, role) {
    this.name = name
    this.secondName = secondName
    this.nickname = nickname
    this.age = age
    this.aid = aid
    this.email = email
    this.gender = gender
    this.role = role
  }
}
export default {
  state: {
    user: null,
    users: [],
    currentUser: {}
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload)
    },
    setNewUser(state, payload) {
      state.users.push(payload)
    },
    loadUsers(state, payload) {
      state.users = payload
    },
    updatesForUser(
      state,
      { name, secondName, nickname, email, age, gender, role, dbId }
    ) {
      const updateUser = state.users.find(el => {
        return el.dbId == dbId
      })
      updateUser.name = name
      updateUser.secondName = secondName
      updateUser.nickname = nickname
      updateUser.email = email
      updateUser.age = age
      updateUser.gender = gender
      updateUser.role = role
    }
  },

  actions: {
    async createUser({ commit, getters }, payload) {
      commit('setClearError')
      try {
        const newUser = new User(
          payload.name,
          payload.secondName,
          payload.nickname,
          payload.age,
          getters.userAuth.id,
          payload.email,
          payload.gender,
          payload.role
        )
        const userDb = await firebase
          .database()
          .ref('users')
          .push(newUser)
        commit('setNewUser', {
          ...newUser,
          id: userDb.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    async fetchUsersDB({ commit }) {
      commit('setClearError')
      const databaseUsers = []
      try {
        const usersFromDB = await firebase
          .database()
          .ref('users')
          .once('value')
        const usersList = usersFromDB.val()
        Object.keys(usersList).forEach(key => {
          const theUser = new User(
            usersList[key].name,
            usersList[key].secondName,
            usersList[key].nickname,
            usersList[key].age,
            usersList[key].aid,
            usersList[key].email,
            usersList[key].gender,
            usersList[key].role,
            usersList[key].dbId
          )
          theUser.dbId = key
          databaseUsers.push(theUser)
          // console.log('theUser:', theUser)
        })
        commit('loadUsers', databaseUsers)
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    async getUserById({ commit }, payload) {
      commit('setClearError')
      try {
        const userFromDatabase = await firebase
          .database()
          .ref('users/' + payload)
          .once('value')
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    async deleteUserById({ commit }, { dbId }) {
      commit('setClearError')
      try {
        const userFromDatabase = await firebase
          .database()
          .ref('users/' + dbId)
          .remove()

        const user = await firebase.auth().currentUser
        user.delete()
      } catch (error) {
        throw error
      }
    },
    async updateUser(
      { commit },
      { name, secondName, nickname, email, age, gender, role, dbId }
    ) {
      commit('setClearError')
      commit('setLoading', true)
      try {
        await firebase
          .database()
          .ref('users')
          .child(dbId)
          .update({
            name,
            secondName,
            nickname,
            email,
            age,
            gender,
            role
          })

        commit('updatesForUser', {
          name,
          secondName,
          nickname,
          email,
          age,
          gender,
          role,
          dbId
        })
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    users(state) {
      return state.users
    },
    usersById(state) {
      return userOfUsers => {
        return state.users.find(aUser => aUser.dbId === userOfUsers)
      }
    },
    currentUser(state) {
      const findId = store.getters.userAuth.id
      return state.users.find(el => {
        return el.aid == findId
      })
    }
  }
}
