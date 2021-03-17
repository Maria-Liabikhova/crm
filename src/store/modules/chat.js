import firebase from 'firebase'

class ChatMessages {
  constructor(avatar, nickname, date, text) {
    this.avatar = avatar
    this.nickname = nickname
    this.date = date
    this.text = text
  }
}

export default {
  state: {
    chatContent: []
  },
  mutations: {
    loadChat(state, payload) {
      state.chatContent = payload
    }
  },
  actions: {
    async addMesage({ commit }, payload) {
      commit('setClearError')
      try {
        const newChatMessage = new ChatMessages(
          payload.avatar,
          payload.nickname,
          payload.date,
          payload.text
        )
        await firebase
          .database()
          .ref('mainChat')
          .push(newChatMessage)
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    },
    async fetchChatDB({ commit }) {
      commit('setClearError')
      const dbChatMessage = []
      try {
        const dbChatContent = await firebase
          .database()
          .ref('mainChat')
          .once('value')
        const chatList = dbChatContent.val()
        Object.keys(chatList).forEach(key => {
          const theChat = new ChatMessages(
            chatList[key].avatar,
            chatList[key].nickname,
            chatList[key].date,
            chatList[key].text
          )
          theChat.id = key
          dbChatMessage.push(theChat)
        })
        commit('loadChat', dbChatMessage)
      } catch (error) {
        commit('setError', error.message)
        commit('errorColor')
        throw error
      }
    }
  },
  getters: {
    chatMessages(state) {
      return state.chatContent
    }
  }
}
