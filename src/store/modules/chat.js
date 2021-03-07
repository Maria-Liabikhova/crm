import firebase from 'firebase'

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
    setItemForChat(state, payload) {
      state.chatItems.push(payload)
    }
  },
  actions: {
    setChatItem({ commit }, payload) {
      commit('setItemForChat', payload)
    }
  },
  getters: {
    items(state) {
      return state.chatItems
    }
  }
}
