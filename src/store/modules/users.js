import firebase from 'firebase'
class Person {
  constructor(name, secondName, nickname, age, id, email, gender, role) {
    this.name = name
    this.secondName = secondName
    this.nickname = nickname
    this.age = age
    this.id = id
    this.email = email
    this.gender = gender
    this.role = role
  }
}
export default {
  state: {
    person: null,
    users: []
  },
  mutations: {
    addPerson(state, payload) {
      state.users.push(payload)
    },
    setNewPerson(state, payload) {
      state.users.push(payload)
    },
    loadUsers(state, payload) {
      state.users = payload
    }
    // updatesForUser(
    //   state,
    //   { name, secondName, nickname, email, age, gender, role, id }
    // ) {
    //   const updateUser = state.users.find(el => {
    //     return el.id == id
    //   })
    //   updateUser.name = name
    //   updateUser.secondName = secondName
    //   updateUser.nickname = nickname
    //   updateUser.email = email
    //   updateUser.age = age
    //   updateUser.gender = gender
    //   updateUser.role = role
    // }
  },

  actions: {
    async createPerson({ commit, getters }, payload) {
      commit('setClearError')
      try {
        const newPerson = new Person(
          payload.name,
          payload.secondName,
          payload.nickname,
          payload.age,
          getters.user.id,
          payload.email,
          payload.gender,
          payload.role
        )
        const person = await firebase
          .database()
          .ref('users')
          .push(newPerson)
        commit('setNewPerson', {
          ...newPerson,
          id: person.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    async usersFromDatabase({ commit }) {
      commit('setClearError')
      const databaseUsers = []
      try {
        const usersFromDB = await firebase
          .database()
          .ref('users')
          .once('value')
        const usersList = usersFromDB.val()
        Object.keys(usersList).forEach(key => {
          const theUser = new Person(
            usersList[key].name,
            usersList[key].secondName,
            usersList[key].nickname,
            usersList[key].age,
            usersList[key].id,
            usersList[key].email,
            usersList[key].gender,
            usersList[key].role,
            usersList[key].dbId
          )
          theUser.dbId = key
          databaseUsers.push(theUser)
          console.log('theUser:', theUser)
        })
        commit('loadUsers', databaseUsers)
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    }
    // async getUserById({ commit }, payload) {
    //   commit('setLoading', true)
    //   try {
    //     const userFromDatabase = await firebase
    //       .database()
    //       .ref('users/' + payload)
    //       .once('value')
    //     // console.log(userFromDatabase.val())
    //   } catch (error) {
    //     throw error
    //   }
    // },
    // async deleteUserById({ commit }, payload) {
    //   try {
    //     const userFromDatabase = await firebase
    //       .database()
    //       .ref('users/' + payload)
    //       .remove()
    //   } catch (error) {
    //     throw error
    //   }
    // },
    // async updateUser(
    //   { commit },
    //   { name, secondName, nickname, email, age, gender, role, id }
    // ) {
    //   commit('setClearError')
    //   commit('setLoading', true)
    //   try {
    //     await firebase
    //       .database()
    //       .ref('users')
    //       .child(id)
    //       .update({
    //         name,
    //         secondName,
    //         nickname,
    //         email,
    //         age,
    //         gender,
    //         role
    //       })
    //     commit('updatesForUser', {
    //       name,
    //       secondName,
    //       nickname,
    //       email,
    //       age,
    //       gender,
    //       role,
    //       id
    //     })
    //   } catch (error) {
    //     throw error
    //   }
    // }
  },
  getters: {
    users(state) {
      return state.users
    },
    personById(state) {
      return personId => {
        return state.users.find(person => person.id === personId)
      }
    }
  }
}
