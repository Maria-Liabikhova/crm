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
    chatItems: [
      {
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        nickNname: 'Oleg88',
        date: '05.03.2021',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
        nickNname: 'LM',
        date: '05.03.2021',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/95.jpg',
        nickNname: 'RedDevel',
        date: '05.03.2021',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
        nickNname: 'VictorLutii',
        date: '05.03.2021',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
      },

      {
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        nickNname: 'Oleg88',
        date: '05.03.2021',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
        nickNname: 'LM',
        date: '05.03.2021',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/95.jpg',
        nickNname: 'RedDevel',
        date: '05.03.2021',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
        nickNname: 'VictorLutii',
        date: '05.03.2021',
        text: 'Last'
      }
    ]
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
