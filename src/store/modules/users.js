import firebase from 'firebase'
import store from '@/store'
class User {
  constructor(
    name,
    secondName,
    nickname,
    age,
    aid,
    email,
    gender,
    role,
    imgSrc
  ) {
    this.name = name
    this.secondName = secondName
    this.nickname = nickname
    this.age = age
    this.aid = aid
    this.email = email
    this.gender = gender
    this.role = role
    this.imgSrc = imgSrc
  }
}
export default {
  state: {
    users: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = [...payload]
    }
  },

  actions: {
    async createUser({ commit, dispatch, getters }, payload) {
      commit('setClearError')
      const img = payload.img
      try {
        const newUser = new User(
          payload.name,
          payload.secondName,
          payload.nickname,
          payload.age,
          getters.userAuth.id,
          getters.userEmail,
          payload.gender,
          payload.role,
          null
        )
        const userDb = await firebase
          .database()
          .ref('users')
          .push(newUser)
        const imgExt = img.name.slice(img.name.lastIndexOf('.'))
        const fileData = await firebase
          .storage()
          .ref(`avatars/${userDb.key}${imgExt}`)
          .put(img)
        const imgSrc = await firebase
          .storage()
          .ref()
          .child(fileData.ref.fullPath)
          .getDownloadURL()
        newUser.imgSrc = imgSrc
        newUser.dbId = userDb.key
        dispatch('updateUser', newUser)
        dispatch('fetchUsersDB')
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
            usersList[key].imgSrc
          )
          theUser.dbId = key
          databaseUsers.push(theUser)
        })
        commit('setUsers', databaseUsers)
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    async deleteUserById({ commit }, payload) {
      commit('setClearError')
      try {
        const userFromDatabase = await firebase
          .database()
          .ref('users/' + payload)
          .remove()
        var desertRef = firebase
          .storage()
          .ref('avatars/')
          .child(`${payload}.jpg`)
        const avatarsFromStorage = desertRef.delete()
        store.dispatch('deletAuth')
      } catch (error) {
        throw error
      }
    },
    async updateUser({ commit }, payload) {
      commit('setClearError')
      try {
        await firebase
          .database()
          .ref('users')
          .child(payload.dbId)
          .update(payload)
      } catch (error) {
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
