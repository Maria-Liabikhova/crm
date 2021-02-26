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
    deletePerson(state, payload) {
      state.users = state.users.filter(person => person.id !== payload)
    },
    loadUsers(state, payload) {
      state.users = payload
    },
    updatesForUser(
      state,
      { name, secondName, nickname, email, age, gender, role, id }
    ) {
      const updateUser = state.users.find(el => {
        return el.id == id
      })
      ;(updateUser.name = name),
        (updateUser.secondName = secondName),
        (updateUser.nickname = nickname),
        (updateUser.email = email),
        (updateUser.age = age),
        (updateUser.gender = gender),
        (updateUser.role = role)
    }
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
      commit('setLoading', true)
      const resultUsers = []
      try {
        const personFromDatabase = await firebase
          .database()
          .ref('users')
          .once('value')
        const usersVal = personFromDatabase.val()
        Object.keys(usersVal).forEach(key => {
          const person = usersVal[key]
          resultUsers.push(
            new Person(
              person.name,
              person.secondName,
              person.nickname,
              person.age,
              key,
              person.email,
              person.gender,
              person.role
            )
          )
          commit('loadUsers', resultUsers)
          commit('setLoading', false)
        })
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        commit('setLoading', false)
        throw error
      }
    },
    personDelete({ commit }, payload) {
      commit('deletePerson', payload)
    },
    async getUserById({ commit }, payload) {
      commit('setLoading', true)
      try {
        const userFromDatabase = await firebase
          .database()
          .ref('users/' + payload)
          .once('value')
        commit('setLoading', false)
        // console.log(userFromDatabase.val())
      } catch (error) {
        commit('setLoading', false)
        throw error
      }
    },
    async deleteUserById({ commit }, payload) {
      try {
        const userFromDatabase = await firebase
          .database()
          .ref('users/' + payload)
          .remove()
      } catch (error) {
        throw error
      }
    },
    async updateUser(
      { commit },
      { name, secondName, nickname, email, age, gender, role, id }
    ) {
      commit('setClearError')
      commit('setLoading', true)
      try {
        await firebase
          .database()
          .ref('users')
          .child(id)
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
          id
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
    personById(state) {
      return personId => {
        return state.users.find(person => person.id === personId)
      }
    }
  }
}
