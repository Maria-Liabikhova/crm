import firebase from 'firebase'

class Item {
  constructor(avatar, nickname, date, text) {
    this.avatar = avatar
    this.nickname = nickname
    this.date = date
    this.text = text
  }
}

export default {
  state: {
    chatItems: []
  },
  mutations: {
    setNewItem(state, payload) {
      state.chatItems.push(payload)
    }
  },
  actions: {
    async setChatItem({ commit }, payload) {
      commit('setClearError')
      try {
        const newItem = new Item(
          payload.avatar,
          payload.nickname,
          payload.date,
          payload.text
        )
        const user = await firebase
          .database()
          .ref('mainChat')
          .push(newItem)
        commit('setNewItem', {
          ...newItem,
          payload
        })
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    }
  },
  getters: {
    items(state) {
      return state.chatItems
    }
  }
}
