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
    loadItems(state, payload) {
      state.chatItems = payload
    }
  },
  actions: {
    async datasChatItem({ commit }, payload) {
      commit('setClearError')
      try {
        const newItem = new Item(
          payload.avatar,
          payload.nickname,
          payload.date,
          payload.text
        )
        await firebase
          .database()
          .ref('mainChat')
          .push(newItem)
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    async fetchChatDB({ commit }) {
      commit('setClearError')
      const dbChatItems = []
      try {
        const itemsFromDB = await firebase
          .database()
          .ref('mainChat')
          .once('value')
        const itemsList = itemsFromDB.val()
        Object.keys(itemsList).forEach(key => {
          const theItem = new Item(
            itemsList[key].avatar,
            itemsList[key].nickname,
            itemsList[key].date,
            itemsList[key].text
          )
          theItem.id = key
          dbChatItems.push(theItem)
        })
        commit('loadItems', dbChatItems)
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
